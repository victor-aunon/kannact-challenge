import { useState } from 'react'
import { Sidebar } from 'ui/components/sidebar'
import { Navbar } from 'ui/components/navbar'
import './home_layout.css'

export function HomeLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={`main ${isOpen ? 'main--open' : ''}`}>
        <Navbar />
        {children}
      </main>
    </>
  )
}
