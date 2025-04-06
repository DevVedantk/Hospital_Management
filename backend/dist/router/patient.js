"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const pclient = new client_1.PrismaClient();
exports.PatientRouter = (0, express_1.Router)();
const zod_1 = __importDefault(require("zod"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_KEY = process.env.JWT_KEY;
console.log(JWT_KEY);
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRETE = process.env.CLIENT_SECRETE;
const sendemail = require("../otplogic/otp");
const otp_generator_1 = __importDefault(require("otp-generator"));
exports.PatientRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("reached!!");
    // console.log(JWT_KEY);
    try {
        const RequiredTypes = zod_1.default.object({
            email: zod_1.default.string().min(5).max(100).email(),
            password: zod_1.default.string().min(5).max(50).optional()
        });
        console.log("reached here");
        const CheckedRequiredTypes = RequiredTypes.safeParse(req.body);
        console.log(CheckedRequiredTypes);
        if (!CheckedRequiredTypes.success) {
            res.status(422).send("Invalid Input types");
            return;
        }
        console.log("reached here also");
        const { email, password } = req.body;
        console.log(email);
        console.log(password);
        const CheckedByEmail = yield pclient.patient.findUnique({
            where: {
                email: email
            }
        });
        console.log("exit or not", CheckedByEmail);
        if (CheckedByEmail) {
            res.json({
                message: "Email_exists"
            });
            return;
        }
        const PutUserIntoDB = yield pclient.patient.create({
            data: {
                email: email,
                password: password,
                Verified: false,
            }
        });
        //  console.log("user toh bnan gaya!!",PutUserIntoDB);
        const CreateOTP = otp_generator_1.default.generate(6, {
            digits: true, upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false
        });
        yield sendemail(email, "OTP-VERIFICATION", CreateOTP);
        const CreateOTPEntryInDB = yield pclient.otpmodel.create({
            data: {
                email: email,
                otp: CreateOTP
            }
        });
        const token = jsonwebtoken_1.default.sign({
            userId: PutUserIntoDB.id
        }, JWT_KEY);
        console.log(token);
        res.cookie("userId", PutUserIntoDB.id, { httpOnly: true, secure: false });
        res.cookie("uidcookie", token, {
            httpOnly: true,
            secure: false
        });
        console.log("here also");
        res.json({
            data: "OTP_Send",
            email
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send("Something went Wrong!!!");
        return;
    }
}));
exports.PatientRouter.post("/logout", (req, res) => {
    res.clearCookie("uidcookie", {
        httpOnly: false, // Ensures the cookie cannot be accessed via JavaScript
        secure: true, // Ensures the cookie is only sent over HTTPS
    });
    res.clearCookie("userId", {
        httpOnly: false, // Ensures the cookie cannot be accessed via JavaScript
        secure: true, // Ensures the cookie is only sent over HTTPS
    });
    res.json({
        message: "logout"
    });
});
exports.PatientRouter.post("/verifyotp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.uidcookie;
    console.log("here");
    console.log(token);
    if (!token) {
        res.json({
            message: "Not_SignedIn"
        });
        return;
    }
    const { otp, email } = req.body;
    console.log(otp);
    console.log(email);
    const FindEmail = yield pclient.patient.findUnique({
        where: {
            email
        }
    });
    if (!FindEmail) {
        res.json({
            message: "Not_found"
        });
        return;
    }
    // console.log("here also")
    const FindOTPInDB = yield pclient.otpmodel.findUnique({
        where: {
            otp
        }
    });
    if (!FindOTPInDB) {
        res.json({
            message: "Invalid_otp"
        });
        return;
    }
    const updateUser = yield pclient.patient.update({
        where: {
            email: email
        },
        data: {
            Verified: true
        }
    });
    const deleteOTPRecord = yield pclient.otpmodel.delete({
        where: {
            otp: otp
        }
    });
    console.log("here aa gaya reh !!");
    res.json({
        message: "Verified!!"
    });
}));
exports.PatientRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("recieved");
    console.log(req.body.email);
    try {
        const RequiredTypes = zod_1.default.object({
            email: zod_1.default.string().min(5).max(100).email(),
        });
        const CheckedRequiredTypes = RequiredTypes.safeParse(req.body);
        if (!CheckedRequiredTypes.success) {
            res.status(422).send("Invalid_Input");
            return;
        }
        console.log("here also");
        const { email } = req.body;
        console.log("email is :", email);
        const CheckedByEmail = yield pclient.patient.findUnique({
            where: {
                email: email
            }
        });
        console.log("here 2");
        console.log(CheckedByEmail);
        if (!CheckedByEmail) {
            res.json({
                message: "not_found"
            });
            return;
        }
        //if email exists but otp not verified then again send OTP to user then 
        //verify otp 
        if (CheckedByEmail && !CheckedByEmail.Verified) {
            res.json({
                message: "Look_like_you_are_not_verfied"
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            userId: CheckedByEmail.id
        }, JWT_KEY);
        console.log("33");
        res.cookie("userId", CheckedByEmail.id, { httpOnly: false, secure: false });
        res.cookie("uidcookie", token, {
            httpOnly: false,
            secure: false
        });
        res.json({
            message: "found",
            data: CheckedByEmail
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong!!");
        return;
    }
}));
exports.PatientRouter.get("/auths", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.uidcookie;
    if (!token) {
        res.json({
            message: "unauths"
        });
        return;
    }
    const user = yield pclient.patient.findFirst({
        where: {
            id: req.cookies.userId
        }
    });
    res.json({
        message: "authenticated",
        PatientData: user
    });
}));
exports.PatientRouter.post("/resend", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.uidcookie;
    console.log("yaha par");
    if (!token) {
        res.json({
            message: "not_signedIn"
        });
        return;
    }
    const { email } = req.body;
    console.log(email);
    const deleteOTPRecord = yield pclient.otpmodel.delete({
        where: {
            email: email
        }
    });
    const CreateOTP = otp_generator_1.default.generate(6, {
        upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false
    });
    yield sendemail(email, "OTP-VERIFICATION", CreateOTP);
    const CreateOTPEntryInDB = yield pclient.otpmodel.create({
        data: {
            email: email,
            otp: CreateOTP
        }
    });
    res.json({
        message: "OTP_send_to_your_email"
    });
}));
exports.PatientRouter.post("/create-Patient", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.uidcookie;
    if (!token) {
        res.json({
            message: "unauths"
        });
        return;
    }
    console.log(req.body);
    const { id, Firstname, Lastname, mobileNo, email, gender, BloodGroup, DOB, Address, MedicalHistory } = req.body;
    const resp = yield pclient.patient.update({
        where: {
            id: id
        },
        data: {
            Firstname: Firstname,
            Lastname: Lastname,
            MobileNo: mobileNo,
            Gender: gender,
            BloodGroup: BloodGroup,
            BirthDate: DOB,
            Address: Address,
            MedicalHistory: MedicalHistory
        }
    });
    console.log(resp);
    res.json({
        id: resp.id,
        message: "data_added"
    });
}));
