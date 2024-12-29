import ExperienceTimeline from '@/components/sections/ExperienceTimeline'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto py-20 px-4">
        {/* Skills Section */}
        <section id="skills" className="py-20">
          <Skills />
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-20">
          <ExperienceTimeline />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </div>
    </main>
  )
}