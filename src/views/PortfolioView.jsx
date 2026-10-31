import { usePortfolioController } from '../controllers/usePortfolioController.js'
import PortfolioHeader from './layout/PortfolioHeader.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

// Merangkai layout bersama dan memilih halaman sesuai route dari controller.
export default function PortfolioView() {
  const { activePage, sendMessage, messageSent } = usePortfolioController()

  const pageContent = {
    utama: <HomePage />,
    profil: <ProfilePage />,
    proyek: <ProjectsPage />,
    kontak: <ContactPage sendMessage={sendMessage} messageSent={messageSent} />,
  }[activePage]

  return (
    <>
      <PortfolioHeader activePage={activePage} />
      <main className="page-view" key={activePage}>
        {pageContent}
      </main>
    </>
  )
}