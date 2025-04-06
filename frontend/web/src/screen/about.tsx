
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Heart,
  Award,
  Star,
  Stethoscope,
  UserPlus,
  Building2,
  Trophy,
  Sun,
  Moon
} from 'lucide-react';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
export const About=()=>{

  return (
    <div className=" bg-black  transition-colors duration-300 text-gray-900">
      {/* Hero Section */}

      <div className='bg-white'>
        <Navbar/>
      </div>
      <div className="relative h-[60vh] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80"
            alt="Medical Team" 
            className="w-full h-full object-cover opacity-40 dark:opacity-40 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b dark:from-transparent dark:to-gray-900 from-white/80 to-gray-100"></div>
        </div>
        
        <div className="relative h-full text-white flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-600">
              About Us
            </h1>
            <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
              Pioneering healthcare excellence with compassion, innovation, and unwavering commitment to patient care.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-6">
                <Target className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To deliver exceptional healthcare services through cutting-edge technology, 
                expert medical professionals, and a patient-centered approach that ensures 
                the highest standards of care and comfort for every individual we serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-6">
                <Heart className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the leading healthcare institution, recognized globally for 
                medical excellence, innovative treatments, and compassionate care, 
                while continuously advancing medical science and improving lives.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 bg-gray-50/80 dark:bg-black/50">
        <div className="max-w-7xl text-white mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Excellence",
                description: "Striving for the highest standards in healthcare delivery and patient outcomes"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Compassion",
                description: "Treating every patient with empathy, dignity, and personalized care"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Innovation",
                description: "Embracing cutting-edge medical technologies and advanced treatments"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-gray-200 dark:border-white/10 shadow-lg"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

     
     <div className='text-black'>
        <Footer/>
     </div>
    </div>
  );
}
