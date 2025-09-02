import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { CertificationsSection } from '@/components/certifications-section'
import { ExtracurricularSection } from '@/components/extracurricular-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { DynamicBackground } from '@/components/dynamic-background'
import { ParticleSystem } from '@/components/particle-system'
import { FloatingActionButton } from '@/components/floating-action-button'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <DynamicBackground />
      <ParticleSystem />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ExtracurricularSection />
      <ContactSection />
      <Footer />
      <FloatingActionButton />
    </main>
  )
}
