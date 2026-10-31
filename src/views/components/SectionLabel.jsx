// Menampilkan nomor dan judul kecil untuk menandai bagian halaman.
export default function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  )
}