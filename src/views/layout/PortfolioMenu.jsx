import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navigation } from '../../models/portfolio.js'

// Merender navigasi desktop/mobile dan menandai halaman yang sedang aktif.
export default function PortfolioMenu({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Navigasi utama">
        {navigation.map((item) => (
          <a
            className={activePage === item.id ? 'main-nav__link is-active' : 'main-nav__link'}
            href={`#/${item.id}`}
            key={item.id}
            onClick={() => setMenuOpen(false)}
          >
            <span className="main-nav__number">{item.number}</span>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )
}