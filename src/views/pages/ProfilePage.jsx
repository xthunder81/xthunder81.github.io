import { profile } from '../../models/portfolio.js'
import SectionLabel from '../components/SectionLabel.jsx'

// Menampilkan ringkasan profil, lokasi, fokus kerja, dan daftar keahlian.
export default function ProfilePage() {
  return (
    <section className="profile-section section-wrap" id="profil">
      <SectionLabel number="01">SEDIKIT TENTANG SAYA</SectionLabel>
      <div className="profile-grid">
        <h2>Internet boleh<br />ramai. Karya saya<br /><em>tetap punya rasa.</em></h2>
        <div className="profile-copy">
          <p className="profile-lead">Saya membangun pengalaman web yang menggabungkan fungsi, rasa ingin tahu, dan detail kecil yang sering luput.</p>
          <p>Mulai dari tampilan yang nyaman dipakai hingga kode yang rapi di balik layar, saya suka mengubah ide menjadi sesuatu yang benar-benar bisa digunakan. Terinspirasi desain cetak, benda sehari-hari, dan internet era awal.</p>
          <div className="profile-facts">
            <div><span>FOKUS</span><strong>Front-end · UI</strong></div>
            <div><span>BERBASIS DI</span><strong>{profile.location}</strong></div>
          </div>
        </div>
      </div>
      <div className="skills-strip"><span>YANG SERING SAYA PAKAI</span><div>REACT <i>✳</i> JAVASCRIPT <i>✳</i> TAILWIND CSS <i>✳</i> FIGMA <i>✳</i> HTML / CSS</div></div>
    </section>
  )
}