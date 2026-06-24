import { sections } from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'
import { DesktopNav, MobileNav } from './components/Navigation'
import { InfoSection } from './sections/InfoSection'
import { JourneySection } from './sections/JourneySection'
import { SkillsSection } from './sections/SkillsSection'
import { AchievementsSection } from './sections/AchievementsSection'
import { ContactsSection } from './sections/ContactsSection'
import { portfolio } from './data/portfolio'

const sectionIds = sections.map((s) => s.id)

function App() {
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      <DesktopNav activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <main className="mobile-main relative z-10 min-w-0 overflow-x-clip md:overflow-x-visible md:pt-16">
        <InfoSection />
        <JourneySection />
        <SkillsSection />
        <AchievementsSection />
        <ContactsSection />
        <footer className="mobile-footer mx-auto max-w-6xl px-4 py-6 text-center text-sm text-[var(--text-muted)] sm:px-6 md:py-8">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </footer>
      </main>
    </>
  )
}

export default App
