import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { FeaturedProjects } from '@/components/featured-projects'
import { TechnicalSkills } from '@/components/technical-skills'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <FeaturedProjects />
      <TechnicalSkills />
      <ExperienceTimeline />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
