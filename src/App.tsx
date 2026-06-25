import { sections } from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'
import { DesktopNav, MobileNav } from './components/Navigation'
import { InfoSection } from './sections/InfoSection'
import { JourneySection } from './sections/JourneySection'
import { SkillsSection } from './sections/SkillsSection'
import { AchievementsSection } from './sections/AchievementsSection'
import { ContactsSection } from './sections/ContactsSection'

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
      </main>
    </>
  )
}

export default App
