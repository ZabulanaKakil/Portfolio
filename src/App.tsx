import { sections } from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'
import { useIsMobile } from './hooks/useMedia'
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
  const isMobile = useIsMobile()

  return (
    <>
      <DesktopNav activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <main className="relative z-10 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:pb-0 md:pt-16">
        <InfoSection activeSection={activeSection} isMobile={isMobile} />
        <JourneySection />
        <SkillsSection />
        <AchievementsSection />
        <ContactsSection />
        <footer className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-[var(--text-muted)]">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </footer>
      </main>
    </>
  )
}

export default App
