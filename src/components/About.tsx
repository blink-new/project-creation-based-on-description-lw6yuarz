import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'JavaScript & TypeScript', years: 5 },
    { name: 'React & React Native', years: 4 },
    { name: 'Node.js & Express', years: 3 },
    { name: 'MongoDB & PostgreSQL', years: 3 },
    { name: 'AWS & Docker', years: 2 },
    { name: 'UI/UX Design', years: 3 },
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I specialize in building modern, high-performance websites and applications.
            Here's a bit about my background and what I love to do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in software development, I've worked on a diverse range of projects
                from small business websites to complex enterprise applications.
              </p>
              <p>
                I started my journey as a front-end developer, crafting pixel-perfect interfaces, and gradually
                expanded my skills to become a versatile full-stack developer.
              </p>
              <p>
                I'm passionate about creating intuitive user experiences that not only look beautiful but also
                perform exceptionally well. I believe that the best digital products are those that
                blend aesthetic beauty with technical excellence.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical blog posts.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg p-8 shadow-lg border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 rounded-md transition-colors hover:bg-muted"
                >
                  <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.years} years experience</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-foreground mb-3">Education</h4>
              <div className="space-y-2">
                <div className="bg-muted/50 p-3 rounded-md">
                  <p className="font-medium">Bachelor of Computer Science</p>
                  <p className="text-sm text-muted-foreground">University of Technology, 2015-2019</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-md">
                  <p className="font-medium">Full-Stack Web Development</p>
                  <p className="text-sm text-muted-foreground">Tech Academy Bootcamp, 2019</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About