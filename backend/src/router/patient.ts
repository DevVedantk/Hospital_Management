import express, { json, Router } from 'express';
import { PrismaClient } from '@prisma/client';
const pclient=new PrismaClient();
export const PatientRouter=Router();
import z, { string } from 'zod';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
const JWT_KEY=process.env.JWT_KEY as string;
console.log(JWT_KEY);
const CLIENT_ID=process.env.CLIENT_ID
const CLIENT_SECRETE=process.env.CLIENT_SECRETE;
const sendemail=require("../otplogic/otp");
import otpgenerator from 'otp-generator';

PatientRouter.post("/signup",async(req,res)=>{
        console.log("reached!!")
        // console.log(JWT_KEY);
   try{
    const RequiredTypes=z.object({
        email:z.string().min(5).max(100).email(),
        password:z.string().min(5).max(50).optional()
    })
    console.log("reached here");
    
    const CheckedRequiredTypes=RequiredTypes.safeParse(req.body);
    console.log(CheckedRequiredTypes)
    
    if(!CheckedRequiredTypes.success){
        res.status(422).send("Invalid Input types");
        return;
    }
    
    console.log("reached here also");
    
    const {email,password}=req.body;
    console.log(email);
    console.log(password);
    
    const CheckedByEmail=await pclient.patient.findUnique({
        where:{
            email:email
        }
    })

    console.log("exit or not",CheckedByEmail)
    
    if(CheckedByEmail){
        res.json({
            message:"Email_exists"
        })
        return;
    }
    
     const PutUserIntoDB=await pclient.patient.create({
        data:{
            email:email,
            password:password,
            Verified:false,
        }
     })

    //  console.log("user toh bnan gaya!!",PutUserIntoDB);

     const CreateOTP=otpgenerator.generate(6,{
        digits:true,upperCaseAlphabets:false,specialChars:false,lowerCaseAlphabets:false
     }) 

     
     await sendemail(email,"OTP-VERIFICATION",CreateOTP)
     
     const CreateOTPEntryInDB=await pclient.otpmodel.create({
        data:{
            email:email,
            otp:CreateOTP
        }
     })

     const token=jwt.sign({
        userId:PutUserIntoDB.id
    },JWT_KEY);

    console.log(token);

 
     res.cookie("userId",PutUserIntoDB.id,{httpOnly:true,secure:false});

    res.cookie("uidcookie",token,{
        httpOnly:true,
        secure:false
    })
    console.log("here also")
    res.json({
        data:"OTP_Send",
        email
    })
   } catch(e){
       console.log(e)
    res.status(500).send("Something went Wrong!!!");
    return;
   }
})

PatientRouter.post("/logout",(req,res)=>{
    res.clearCookie("uidcookie", {
        httpOnly: false,  // Ensures the cookie cannot be accessed via JavaScript
        secure: true,    // Ensures the cookie is only sent over HTTPS
    });
    res.clearCookie("userId", {
        httpOnly: false,  // Ensures the cookie cannot be accessed via JavaScript
        secure: true,    // Ensures the cookie is only sent over HTTPS
    });

    res.json({
        message:"logout"
    })
})

PatientRouter.post("/verifyotp",async(req,res)=>{
    const token=req.cookies.uidcookie;
    console.log("here");

    console.log(token);
    if(!token){
        res.json({
            message:"Not_SignedIn"
        })
        return;
    }
    
    const {otp,email}=req.body;
   
    console.log(otp);
    console.log(email);

    const FindEmail=await pclient.patient.findUnique({
        where:{
            email
        }
    })
    if(!FindEmail){
        res.json({
            message:"Not_found"
        })
        return;
    }

    // console.log("here also")
    const FindOTPInDB=await pclient.otpmodel.findUnique({
        where:{
            otp
        }
    })
        
    if(!FindOTPInDB){
        res.json({
            message:"Invalid_otp"
        })
        return;
    }
    const updateUser=await pclient.patient.update({
        where:{
            email:email
        },
        data:{
           Verified:true 
        }
    })

    const deleteOTPRecord=await pclient.otpmodel.delete({
        where:{
            otp:otp
        }
    })
    console.log("here aa gaya reh !!")

    res.json({
        message:"Verified!!"
    })

})

PatientRouter.post("/signin",async(req,res)=>{
    console.log("recieved")
    console.log(req.body.email);
   try {
     
    const RequiredTypes=z.object({
        email:z.string().min(5).max(100).email(),
    })

    const CheckedRequiredTypes=RequiredTypes.safeParse(req.body);
     
    if(!CheckedRequiredTypes.success){
       res.status(422).send("Invalid_Input");
       return;
    }
    console.log("here also");
 
    const {email}=req.body;
    console.log("email is :",email);
   
    
    const CheckedByEmail=await pclient.patient.findUnique({
        where:{
           email:email 
        }
    })

    console.log("here 2");
    console.log(CheckedByEmail);

    if(!CheckedByEmail){
       res.json({
        message:"not_found"
       })
       return;
    }

    //if email exists but otp not verified then again send OTP to user then 
    //verify otp 
    if(CheckedByEmail && !CheckedByEmail.Verified){
         res.json({
          message:"Look_like_you_are_not_verfied"
         })
         return;
    }

    const token=jwt.sign({
        userId:CheckedByEmail.id
    },JWT_KEY);
    
     console.log("33");

     res.cookie("userId",CheckedByEmail.id,{httpOnly:false,secure:false});

    res.cookie("uidcookie",token,{
        httpOnly:false,
        secure:false
    })
    res.json({
        message:"found",
        data:CheckedByEmail
    })


   } catch (error) {
       console.log(error);
       res.status(500).send("Something went wrong!!");
       return;
   }
})


PatientRouter.get("/auths",async(req,res)=>{

    const token=req.cookies.uidcookie;
        if(!token){
            res.json({
                message:"unauths"
            })
            return;
        }   
        const user=await pclient.patient.findFirst({
           where:{
             id:req.cookies.userId
           }
        })
        res.json({
            message:"authenticated",
            PatientData:user
         })
})          


PatientRouter.post("/resend",async(req,res)=>{
      const token=req.cookies.uidcookie;
      console.log("yaha par");

      if(!token){
        res.json({
            message:"not_signedIn"
        })
        return;
      }

      const {email}=req.body;

      console.log(email);

      const deleteOTPRecord=await pclient.otpmodel.delete({
        where:{
            email:email
        }
    })
       
      const CreateOTP=otpgenerator.generate(6,{
        upperCaseAlphabets:false,lowerCaseAlphabets:false,specialChars:false
      })
      await sendemail(email,"OTP-VERIFICATION",CreateOTP);


      const CreateOTPEntryInDB=await pclient.otpmodel.create({
        data:{
            email:email,
            otp:CreateOTP
        }
     })

     res.json({
        message:"OTP_send_to_your_email"
     })

})


PatientRouter.post("/create-Patient",async(req,res)=>{
    const token=req.cookies.uidcookie;
        if(!token){
            res.json({
                message:"unauths"
            })
            return;
        }   
        console.log(req.body);

       const {id,Firstname,Lastname,mobileNo,email,gender,BloodGroup,DOB,Address,MedicalHistory}=req.body;
      const resp= await pclient.patient.update({
          where:{
            id:id
          },
          data:{
                Firstname :Firstname,
                Lastname:Lastname,
                MobileNo:mobileNo,
               Gender:gender,
               BloodGroup:BloodGroup,
               BirthDate:DOB,
               Address:Address,
               MedicalHistory:MedicalHistory
          }
        })

        console.log(resp);

        res.json({
            id:resp.id,
            message:"data_added"
        })

})
