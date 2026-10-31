import { ArrowUpRight } from 'lucide-react'
import PortfolioMenu from './PortfolioMenu.jsx'

// Menyusun identitas situs, navigasi, dan tautan cepat ke halaman kontak.
export default function PortfolioHeader({ activePage }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#/utama" aria-label="XThunder, ke halaman utama">
        XT<span>.</span>
      </a>
      <PortfolioMenu activePage={activePage} />
      <a className="header-contact" href="#/kontak">
        Ajak kolaborasi <ArrowUpRight size={15} strokeWidth={1.8} />
      </a>
    </header>
  )
}