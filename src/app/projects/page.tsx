import Projects from '@/components/Project'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Portfolio | Projects",
  description: "Professional project showcasing creative development work",
};

const Project = () => {
  return (
    <Projects showMore={false} />
  )
}

export default Project
