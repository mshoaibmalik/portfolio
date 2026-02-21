'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-blue-500 shadow-lg mx-auto">
              <img 
                src="/picture.png" 
                alt="Muhammad Shoaib Malik" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects
          </p>
        </div>
        
        <ContactForm />
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Or reach out directly via email or social media
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="mailto:msmkshoaib@gmail.com">
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    Download Resume
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
