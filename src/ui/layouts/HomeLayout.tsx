import { useState } from 'react'
import { Sidebar } from 'ui/components/sidebar'

export function HomeLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
    </>
  )
}
