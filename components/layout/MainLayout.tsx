'use client';

// ... previous imports remain same
import ExperienceCarousel from '../features/ExperienceCarousel';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation remains same */}
      <nav>...</nav>

      {/* Hero Section */}
      <section id="about" className="pt-16">
        <PersonalBrand />
      </section>

      {/* Main Content - Note the reordered sections */}
      <main className="max-w-7xl mx-auto px-4">
        {/* Professional Journey moved above Skills */}
        <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <ExperienceCarousel />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <SkillsGrid />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <ProjectShowcase />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      {/* Footer remains same */}
      <footer>...</footer>
    </div>
  );
};

export default MainLayout;