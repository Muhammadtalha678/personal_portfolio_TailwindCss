'use client'
import { motion } from "framer-motion";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Contact = () => {
    const router = useRouter()
    return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-widest text-gray-400">Contact</span>
          <h2 className="mt-2 text-3xl font-bold">Get In Touch</h2>
          
          <div className="mt-8 glass p-8 rounded-2xl">
            <p className="text-gray-300 mb-6">
              Interested in working together? Let's discuss your project.
            </p>
            <Button
                          variant="outline"
                          className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                          onClick={() => router.push('/contact')}
                        >
                          Contact Me
                        </Button>
            {/* <a
              href="mailto:your.email@example.com"
              className="px-6 py-3 rounded-full glass hover-glass inline-block"
            >
              Send Message
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact