import {
  ArrowDown01Icon,
  ArrowDownAZIcon,
  ArrowUp10Icon,
  ArrowUpZAIcon,
  CalendarClock,
  ChevronLeftCircle,
  ChevronRightCircle,
  HomeIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  SettingsIcon,
} from 'lucide-react'

export const icons = {
  sortAscNumber: <ArrowDown01Icon />,
  sortDescNumber: <ArrowUp10Icon />,
  sortAscAlpha: <ArrowDownAZIcon />,
  sortDescAlpha: <ArrowUpZAIcon />,
  next: <ChevronRightCircle />,
  prev: <ChevronLeftCircle />,
  settings: <SettingsIcon />,
  home: <HomeIcon />,
  calendar: <CalendarClock />,
  sidebarOpen: <PanelLeftOpenIcon />,
  sidebarClose: <PanelLeftCloseIcon />,
}
