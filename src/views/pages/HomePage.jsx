import { ArrowDown } from 'lucide-react'
import { profile } from '../../models/portfolio.js'

// Merender halaman utama dengan perkenalan singkat dan tautan ke profil.
export default function HomePage() {
  return (
    <section className="hero section-wrap" id="utama">
      <div className="hero-copy">
        <div className="hero-kicker"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
        <p className="hero-eyebrow">Halo, saya {profile.name}.</p>
        <h1>Membuat hal<br />digital terasa <em>lebih</em><br /><span>manusiawi.</span></h1>
        <div className="hero-bottom">
          <p>Pengembang web yang percaya bahwa teknologi terbaik tetap terasa hangat, sederhana, dan dibuat dengan hati.</p>
          <a className="round-link" href="#/profil" aria-label="Lihat profil">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
      <div className="hero-art" aria-label="Potret kreator di ruang kerja">
        <div className="hero-art__frame">
          <img src={profile.image} alt={profile.imageAlt} fetchPriority="high" />
          <span className="hero-art__stamp">WEB<br />MAKER<br /><b>’25</b></span>
        </div>
        <div className="hero-art__caption"><span>FIG. 01</span><span>SEDIKIT IDE, BANYAK KEMUNGKINAN</span></div>
        <span className="hero-art__asterisk" aria-hidden="true">✳</span>
      </div>
      <div className="hero-index"><span>PORTOFOLIO DIGITAL</span><span>01 — 04</span></div>
    </section>
  )
}