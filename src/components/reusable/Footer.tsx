import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { linkHref: "https://github.com/Muhammadtalha678",social:Github },
  {linkHref:"https://www.linkedin.com/in/muhammad-talha-93003221b",social:Linkedin},
  {linkHref:"",social:Twitter},
  {linkHref:"/contact",social:Mail},
]

const Footer = () => {
  return (
    <footer className="glass mt-20 py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-purple-500 mb-4">Muhammad Talha</h3>
            <p className="text-gray-400">
              Building digital experiences with modern web technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-purple-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-purple-500 mb-4">Connect</h3>
            <div className="flex space-x-4">
              {
                socialLinks.map((e, i) => (
                  <Link href={e.linkHref} key={i+1} target="_blank" className="text-gray-400 hover:text-purple-500 transition-colors">
                    <e.social className="w-6 h-6" />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 MT Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
