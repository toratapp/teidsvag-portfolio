import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/common/layout'
import HomePage from './components/pages/HomePage'

function App() {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
