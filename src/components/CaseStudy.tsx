'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Lightbulb, Code, Bug } from 'lucide-react'

export default function CaseStudy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Deep Dive</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A detailed look at my most challenging and rewarding project
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-white text-blue-600">Featured Project</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Case Study</Badge>
              </div>
              <h3 className="text-3xl font-bold mb-2">Student Election System</h3>
              <p className="text-blue-100">Secure digital voting system with real-time tallying and data persistence</p>
            </div>
            
            <CardContent className="p-8 space-y-8">
              {/* The Problem */}
              <div>
                <h4 className="flex items-center gap-2 text-xl font-semibold mb-3">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  The Problem
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional student elections are often manual, time-consuming, and prone to human error. 
                  Managing voter authentication, vote counting, and result transparency presents significant challenges 
                  for student organizations. The process needs to be secure, efficient, and trustworthy to ensure 
                  fair democratic processes.
                </p>
              </div>
              
              {/* The Architecture */}
              <div>
                <h4 className="flex items-center gap-2 text-xl font-semibold mb-3">
                  <Code className="w-5 h-5 text-blue-500" />
                  Architecture & Tech Stack
                </h4>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I designed a robust system using C for core functionality with careful attention to data integrity 
                    and security. The architecture prioritizes simplicity and reliability.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Core System</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• C programming language</li>
                        <li>• File I/O for persistent data</li>
                        <li>• Arrays for vote management</li>
                        <li>• Authentication logic</li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Data Management</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• File I/O for persistent data</li>
                        <li>• Real-time tallying system</li>
                        <li>• Admin dashboard controls</li>
                        <li>• Secure vote validation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["C", "File I/O", "Authentication", "Arrays"].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* The Hardest Part */}
              <div>
                <h4 className="flex items-center gap-2 text-xl font-semibold mb-3">
                  <Bug className="w-5 h-5 text-red-500" />
                  The Hardest Part: Data Persistence & Integrity
                </h4>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    The biggest challenge was ensuring vote counts couldn't be lost or manipulated. When the program 
                    closed or crashed, all election data needed to survive. Initial attempts using in-memory storage 
                    proved unreliable.
                  </p>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 mb-2">The Problem:</h5>
                    <p className="text-sm text-red-700">
                      Data loss during program termination and potential for vote manipulation. 
                      Manual recounts were required when system crashes occurred, undermining trust in the election process.
                    </p>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">The Solution:</h5>
                    <p className="text-sm text-green-700">
                      Implemented robust File I/O system with immediate data writing after each vote. 
                      Created data validation checks and backup mechanisms. Ensured atomic operations 
                      to prevent partial data corruption. Added checksums to detect tampering.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div>
                <h4 className="text-xl font-semibold mb-3">Results & Impact</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-100">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-muted-foreground">Data Integrity</div>
                  </div>
                  <div className="text-center p-4 bg-gray-100">
                    <div className="text-2xl font-bold text-green-600">Real-time</div>
                    <div className="text-sm text-muted-foreground">Vote Tallying</div>
                  </div>
                  <div className="text-center p-4 bg-gray-100">
                    <div className="text-2xl font-bold text-purple-600">Zero</div>
                    <div className="text-sm text-muted-foreground">Data Loss Incidents</div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="flex gap-4 pt-4">
                <Button className="gap-2" asChild>
                  <a href="https://election-demo.example.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://github.com/mshoaibmalik/student-election-system" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
