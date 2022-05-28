import { FunctionComponent } from 'react'
import { Outlet } from 'react-router'
import ResponsiveAppBar from './Header'

type IAppProps = {
  updateDarkmode: (value: string, numberOfDays: Date) => void
  darkmode: boolean
}

export const App: FunctionComponent<IAppProps> = ({ darkmode, updateDarkmode, ...other }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  )
}

export default App
