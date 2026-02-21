'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Student Election System",
    description: "A secure and transparent digital voting system built with C, implementing voter authentication, real-time tallying, and admin dashboard for candidate management.",
    tech: ["C", "File I/O", "Authentication", "Arrays", "Real-time Processing"],
    demoUrl: "https://election-demo.example.com",
    githubUrl: "https://github.com/mshoaibmalik/student-election-system",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A responsive online shopping platform with dynamic product grid, persistent shopping cart, and real-time price calculations using JavaScript DOM manipulation.",
    tech: ["JavaScript", "HTML", "CSS", "Flexbox", "Grid", "DOM Manipulation"],
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/mshoaibmalik/ecommerce-platform",
    featured: false
  },
  {
    id: 3,
    title: "Sentiment Analyzer",
    description: "A machine learning project that classifies text sentiment using Python, NLTK for preprocessing, and achieves 85% accuracy with Naive Bayes classifier.",
    tech: ["Python", "Machine Learning", "NLTK", "Data Processing", "Naive Bayes"],
    demoUrl: "https://sentiment-demo.example.com",
    githubUrl: "https://github.com/mshoaibmalik/sentiment-analyzer",
    featured: false
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, real-time data updates, and beautiful data visualizations.",
    tech: ["React", "Weather API", "Chart.js", "Geolocation", "Tailwind CSS"],
    demoUrl: "https://weather-dashboard.example.com",
    githubUrl: "https://github.com/mshoaibmalik/weather-dashboard",
    featured: false
  }
]

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quality over quantity - Each project represents a unique challenge and learning opportunity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className={`hover:shadow-lg transition-shadow duration-300 ${project.featured ? 'ring-2 ring-blue-500' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="default" className="bg-blue-500">Featured</Badge>
                  )}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-4">
                <Button size="sm" className="gap-2" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
