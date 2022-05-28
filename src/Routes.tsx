import { Route, Routes as BaseRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Template from './pages/Template'
import App from './pages/App'
import Fallback from './pages/Fallback'

import { FunctionComponent } from 'react'

type IRouterProps = {
  updateDarkmode: (value: string, numberOfDays: Date) => void
  darkmode: boolean
}

const Routes: FunctionComponent<IRouterProps> = ({ darkmode, updateDarkmode, ...other }) => {
  return (
    <BaseRoutes>
      <Route path='/' element={<App darkmode={darkmode} updateDarkmode={updateDarkmode} />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='template' element={<Template />} />
        <Route path='*' element={<Fallback />} />
      </Route>
    </BaseRoutes>
  )
}

export default Routes
