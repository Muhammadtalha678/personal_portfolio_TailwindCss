'use client'
import { motion } from "framer-motion";
import { Book, Award, Code } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Image from "next/image"; // ✅ Import Next.js Image component

const educations = [
  { degree: "Master in Computer Science (MCS)", institute: 'University of Technology', year: '2021-2022' },
  { degree: "Bachelor of Science (MATHEMATICS)", institute: 'University of Technology', year: '2019-2020' },
  { degree: "Higher Education Certificate (INTERMEDIATE)", institute: 'Karachi Intermediate Board', year: '2017-2018' },
  { degree: "Secondary School Certification (MATRICULATION)", institute: 'Karachi MATRICULATION Board', year: '2015-2016' }
];

const certifications = [
  { courseName: "Certified Applied Generative AI Course", institute: 'Governor House Karachi', year: 'In Progress' },
  { courseName: "Web & Mobile App Development", institute: 'Saylani Mass IT (SMIT)', year: '2025' }
];

const About = ({ showMoreAbout = false }: { showMoreAbout?: boolean }) => {
  const router = useRouter();

  return (
    <section id="about" className="py-20 px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={showMoreAbout ? {} : { opacity: 0, y: 20 }}
          whileInView={showMoreAbout ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="overflow-hidden rounded-2xl w-full h-full max-w-md shadow-lg">
            {/* ✅ Use Next.js Image for optimization */}
            <Image
              src="/images/personal.jpg"
              alt="Hero"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              About <span className="text-purple-500">Me</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              {`I'm a Full Stack Developer with a passion for creating beautiful, functional, 
              and user-centered digital experiences. With a strong foundation in both front-end 
              and back-end development, I bring ideas to life through clean code and intuitive design.`}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {`When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through blog posts.`}
            </p>
          </div>
        </motion.div>

        {showMoreAbout ? (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education Section */}
            <motion.div
              initial={showMoreAbout ? {} : { opacity: 0, y: 20 }}
              whileInView={showMoreAbout ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <Book className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-3 text-gray-400">
                {educations.map((e, i) => (
                  <li key={i}>
                    <div className="font-medium">{e.degree}</div>
                    <div className="text-sm">{e.institute} • {e.year}</div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={showMoreAbout ? {} : { opacity: 0, y: 20 }}
              whileInView={showMoreAbout ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <Award className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-3 text-gray-400">
                {certifications.map((e, i) => (
                  <li key={i}>
                    <div className="font-medium">{e.courseName}</div>
                    <div className="text-sm">{e.institute} • {e.year}</div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={showMoreAbout ? {} : { opacity: 0, y: 20 }}
              whileInView={showMoreAbout ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl"
            >
              <Code className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <h4 className="font-medium mb-2">Frontend</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Backend</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="flex justify-center mt-10">
            <Button
              variant="default"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => router.push('/about-me')}
            >
              More About 
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
