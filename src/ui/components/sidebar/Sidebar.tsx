import './sidebar.css'
import { Link, useRouterState } from '@tanstack/react-router'
import routePaths from 'app/routes/routePaths'
import { icons } from 'ui/icons'

type SidebarProps = React.ComponentProps<'aside'> & {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Sidebar({ isOpen = true, setIsOpen, ...props }: SidebarProps) {
  const pathname = useRouterState({ select: state => state.location.pathname })

  return (
    <aside {...props} className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <img
          src="/logos/kannact-logo.png"
          alt="Logo"
          className="sidebar__logo"
        />
        <h2 className="sidebar__title"> {isOpen ? 'Kannact' : 'K'} </h2>
        <div
          className="sidebar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          title={isOpen ? 'Close the sidebar' : 'Open the sidebar'}
        >
          {isOpen ? icons.sidebarClose : icons.sidebarOpen}
        </div>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__nav__list">
          <li
            className={`sidebar__nav__item ${pathname === routePaths.home ? 'sidebar__nav__item--active' : ''}`}
          >
            <Link to={routePaths.home}>
              {icons.home} {isOpen && 'Home'}
            </Link>
          </li>
          <li className="sidebar__nav__item">
            <a href="#">
              {icons.calendar} {isOpen && 'Appointments'}
            </a>
          </li>
          <li className="sidebar__nav__item">
            <a href="#">
              {icons.settings} {isOpen && 'Settings'}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
