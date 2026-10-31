import { ArrowUpRight, Github, Instagram } from 'lucide-react'
import { profile } from '../../models/portfolio.js'
import SectionLabel from '../components/SectionLabel.jsx'
import PortfolioFooter from '../layout/PortfolioFooter.jsx'

// Menampilkan kanal kontak dan form yang mengirim draft ke controller.
export default function ContactPage({ sendMessage, messageSent }) {
  return (
    <section className="contact-section section-wrap" id="kontak">
      <SectionLabel number="03">PUNYA IDE?</SectionLabel>
      <div className="contact-grid">
        <div className="contact-copy">
          <h2>Mari bikin<br />sesuatu yang<br /><em>berarti.</em></h2>
          <p>Punya proyek, ide, atau sekadar ingin menyapa? Kotak masuk saya terbuka.</p>
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={18} /></a>
          <div className="social-links">
            <a href="https://github.com/xthunder81" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={16} /> INSTAGRAM</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={sendMessage}>
          <label htmlFor="name">NAMA KAMU</label>
          <input id="name" name="name" type="text" placeholder="Nama lengkap" required />
          <label htmlFor="email">ALAMAT EMAIL</label>
          <input id="email" name="email" type="email" placeholder="nama@email.com" required />
          <label htmlFor="message">CERITAKAN IDEMU</label>
          <textarea id="message" name="message" rows="3" placeholder="Sedang ingin membuat apa?" required />
          <button className="submit-button" type="submit">Kirim pesan <ArrowUpRight size={17} /></button>
          {messageSent && <p className="form-note" role="status">Aplikasi email terbuka untuk melanjutkan pesanmu.</p>}
        </form>
      </div>
      <PortfolioFooter />
    </section>
  )
}