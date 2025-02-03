'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { ArrowDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  return (
    <section className="min-h-screen flex items-center px-8 lg:px-24 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {`Hi, I'm`} <span className="text-purple-500">Muhammad Talha</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {`A Full Stack Developer, specializing in building exceptional digital experiences.`}
          </p>
          
          <div className="flex gap-4">
            <Button
              variant="default"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => router.push('/projects')}
            >
              View Projects
            </Button>
            
            <Button
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
              onClick={() => router.push('/contact')}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="overflow-hidden rounded-2xl w-full h-full max-w-md shadow-lg">
            <img
              src="/images/personal.jpg"
              alt="Hero"
              className="object-cover w-full h-full rounded-2xl"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                maxWidth: '500px', // Prevent the image from growing too large
                maxHeight: '500px', // Prevent the image from growing too large
              }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Motion for Arrow Down with Fade-In + Bounce Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDownIcon className="w-6 h-6 text-purple-500 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
