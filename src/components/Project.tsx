'use client'
import { motion } from "framer-motion";
import Button from "./Button";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Ecommerce Furniro",
    description: "A Ecommerce Furniro web application built with NextJs , TypeScript , Tailwind Css & using CMS Sanity", 
    tags: ["NextJS", "TypeScript", "Tailwind"],
    website: "https://furniro-alpha-pied.vercel.app", // Your live website URL
    image:"/images/blood-donation.jpg"
  },
  {
    title: "Project One",
    description: "A Ecommerce Furniro web application built with NextJs , TypeScript & Tailwind Css",
    tags: ["NextJS", "TypeScript", "Tailwind"],
    website: "https://furniro-alpha-pied.vercel.app", // Your live website URL
    image:"/images/blood-donation.jpg"
  },
  {
    title: "Project One",
    description: "A Ecommerce Furniro web application built with NextJs , TypeScript & Tailwind Css",
    tags: ["NextJS", "TypeScript", "Tailwind"],
    website: "https://furniro-alpha-pied.vercel.app", // Your live website URL
    image:"/images/blood-donation.jpg"
  },
];

const Projects = ({showMore = true}:{showMore? : boolean}) => {
  const router = useRouter()
  

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={showMore?{ opacity: 0, y: 20 }:{}}
          whileInView={showMore?{  opacity: 1, y: 0 }:{}}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-gray-400">Portfolio</span>
          <h2 className="mt-2 text-3xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          { showMore ? projects.slice(0,3).map((project, index) => (
            <motion.div
              key={index}
              initial={showMore?{ opacity: 0, y: 20 }:{}}
              whileInView={showMore?{ opacity: 1, y: 0 }:{}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                {/* Display the screenshot */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full glass"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )) :
          projects.map((project, index) => (
            <motion.div
              key={index}
              initial={showMore?{ opacity: 0, y: 20 }:{}}
              whileInView={showMore?{ opacity: 1, y: 0 }:{}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                {/* Display the screenshot */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full glass"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))
          }
        </div>
        {
          showMore && 
        <div className="flex justify-center items-center mt-10">
            
           <Button
                        variant="default"
                        className="bg-purple-600 hover:bg-purple-700"
                        onClick={() => router.push('/projects')}
                      >
                        Show More
                      </Button>
        </div>
        }
      </div>
    </section>
  );
};

export default Projects;
