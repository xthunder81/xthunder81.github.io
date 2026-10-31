import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { projects } from '../../models/portfolio.js'
import SectionLabel from '../components/SectionLabel.jsx'

// Merender daftar proyek dari data model sebagai kartu portofolio.
export default function ProjectsPage() {
  const projectsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const pageCount = Math.ceil(projects.length / projectsPerPage)
  const firstProjectIndex = (currentPage - 1) * projectsPerPage
  const visibleProjects = projects.slice(firstProjectIndex, firstProjectIndex + projectsPerPage)

  return (
    <section className="projects-section section-wrap" id="proyek">
      <SectionLabel number="02">PILIHAN KARYA</SectionLabel>
      <div className="projects-heading">
        <h2>Yang sudah<br /><em>jadi cerita.</em></h2>
        <p>Beberapa eksplorasi digital tentang ide, identitas, dan pengalaman yang menyenangkan.</p>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <a
            className={`project-card project-card--${project.color}`}
            href={project.url}
            key={project.number}
            target="_blank"
            rel="noreferrer"
            aria-label={`Buka repositori ${project.name} di tab baru`}
          >
            <div className="project-card__image">
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
              <span className="project-card__number">{project.number} / {String(projects.length).padStart(2, '0')}</span>
              <span className="project-card__arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
            </div>
            <div className="project-card__body">
              <span className="project-card__type">{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      {pageCount > 1 && (
        <nav className="project-pagination" aria-label="Navigasi halaman proyek">
          <span className="project-pagination__count">
            {String(firstProjectIndex + 1).padStart(2, '0')}–{String(Math.min(firstProjectIndex + projectsPerPage, projects.length)).padStart(2, '0')} dari {String(projects.length).padStart(2, '0')}
          </span>
          <div className="project-pagination__pages">
            <button
              className="project-pagination__control"
              type="button"
              aria-label="Halaman sebelumnya"
              onClick={() => setCurrentPage((page) => page - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={17} />
            </button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
              <button
                className={currentPage === page ? 'project-pagination__control is-active' : 'project-pagination__control'}
                type="button"
                key={page}
                aria-label={`Halaman ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="project-pagination__control"
              type="button"
              aria-label="Halaman berikutnya"
              onClick={() => setCurrentPage((page) => page + 1)}
              disabled={currentPage === pageCount}
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </nav>
      )}
    </section>
  )
}