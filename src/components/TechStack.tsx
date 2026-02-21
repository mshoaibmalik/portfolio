'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript", level: "Expert" }
    ]
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Others",
    technologies: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "AWS", level: "Beginner" },
      { name: "Figma", level: "Intermediate" },
      { name: "VS Code", level: "Expert" }
    ]
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert": return "bg-green-500"
    case "Advanced": return "bg-blue-500"
    case "Intermediate": return "bg-yellow-500"
    case "Beginner": return "bg-gray-500"
    default: return "bg-gray-500"
  }
}

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Stack</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-between">
                      <span className="font-medium">{tech.name}</span>
                      <Badge 
                        variant="secondary" 
                        className={`${getLevelColor(tech.level)} text-white border-none`}
                      >
                        {tech.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-wrap gap-3 justify-center">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Tailwind CSS", "Git", "Docker"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
