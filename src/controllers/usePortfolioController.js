import { useEffect, useState } from 'react'
import { navigation, profile } from '../models/portfolio.js'

// Mengambil ID halaman dari hash URL, lalu memakai halaman utama jika rutenya tidak dikenal.
function getCurrentPage() {
  const page = window.location.hash.replace(/^#\/?/, '')
  return navigation.some(({ id }) => id === page) ? page : 'utama'
}

// Mengelola halaman aktif dan aksi form kontak untuk seluruh tampilan portofolio.
export function usePortfolioController() {
  const [activePage, setActivePage] = useState(getCurrentPage)
  const [messageSent, setMessageSent] = useState(false)

  // Menyinkronkan halaman saat hash berubah dan mengembalikan posisi scroll ke atas.
  useEffect(() => {
    function handlePageChange() {
      setActivePage(getCurrentPage())
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handlePageChange)
    return () => window.removeEventListener('hashchange', handlePageChange)
  }, [])

  // Membuat draft email dari form dan membukanya di aplikasi email pengguna.
  function sendMessage(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio: ${formData.get('name')}`)
    const body = encodeURIComponent(`${formData.get('message')}\n\nBalasan ke: ${formData.get('email')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setMessageSent(true)
  }

  return { activePage, sendMessage, messageSent }
}