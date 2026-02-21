'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Calendar, MapPin, Award, Target } from 'lucide-react'

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "Sindh Madressatul Islam University, Karachi",
    location: "Karachi, Pakistan",
    duration: "2024 - 2028 (Expected)"
  },
  {
    degree: "Intermediate in Pre-Engineering",
    school: "D. J Sindh Govt Science College, Karachi",
    location: "Karachi, Pakistan",
    duration: "2019 - 2021"
  }
]

const aboutPoints = [
  "Passionate software engineering student with expertise in modern web technologies",
  "Specialized in React, Next.js, and TypeScript development",
  "Strong problem-solving skills with experience in full-stack development",
  "Active contributor to open-source projects and technical communities",
  "Seeking opportunities to apply technical skills in real-world applications"
]

const interests = [
  "Web Development", "Machine Learning", "Cloud Computing", 
  "Mobile Development", "DevOps", "UI/UX Design"
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about my journey, education, and what drives my passion for software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Personal Information */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Personal Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aboutPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Technical Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-green-600" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h4>
                      <p className="text-gray-600 font-medium mb-4">{edu.school}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Card className="text-center p-6 bg-gray-100">
            <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </Card>
          <Card className="text-center p-6 bg-gray-100">
            <div className="text-2xl font-bold text-green-600 mb-1">2</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </Card>
          <Card className="text-center p-6 bg-gray-100">
            <div className="text-2xl font-bold text-purple-600 mb-1">10+</div>
            <div className="text-sm text-gray-600">Technologies</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
