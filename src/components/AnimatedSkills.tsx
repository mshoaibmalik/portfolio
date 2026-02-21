'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express.js", level: 70, category: "Backend" },
  { name: "Python", level: 65, category: "Backend" },
  { name: "MongoDB", level: 68, category: "Backend" },
  { name: "Git", level: 85, category: "Tools" }
]

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevel, setAnimatedLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      const animationTimer = setTimeout(() => {
        setAnimatedLevel(level)
      }, 100)
      return () => clearTimeout(animationTimer)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, level])

  const getLevelColor = (level: number) => {
    if (level >= 80) return 'bg-green-500'
    if (level >= 60) return 'bg-blue-500'
    return 'bg-yellow-500'
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-sm text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full ${getLevelColor(level)} transition-all duration-1000 ease-out rounded-full`}
          style={{ 
            width: isVisible ? `${animatedLevel}%` : '0%',
            transitionDelay: '100ms'
          }}
        />
      </div>
    </div>
  )
}

export default function AnimatedSkills() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const categories = ["All", "Frontend", "Backend", "Tools"]
  
  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proficient in modern web technologies and development tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <Card key={skill.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <SkillBar 
                  name={skill.name} 
                  level={skill.level} 
                  delay={index * 50}
                />
                <div className="mt-3">
                  <Badge variant="secondary" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600 mb-1">5</div>
            <div className="text-sm text-gray-600">Expert Skills</div>
          </Card>
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600 mb-1">4</div>
            <div className="text-sm text-gray-600">Advanced Skills</div>
          </Card>
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-100">
            <div className="text-2xl font-bold text-yellow-600 mb-1">3</div>
            <div className="text-sm text-gray-600">Intermediate Skills</div>
          </Card>
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-100">
            <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
            <div className="text-sm text-gray-600">Total Technologies</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
