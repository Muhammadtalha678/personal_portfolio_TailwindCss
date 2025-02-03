
import About from '@/components/About'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Portfolio | About Me",
  description: "About My Education, Certification & Skills",
};
const AboutMe = () => {
  return (
    <About showMoreAbout={true} />
  )
}

export default AboutMe
