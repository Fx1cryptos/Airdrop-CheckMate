import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Checker } from './pages/Checker'
import { History } from './pages/History'
import { About } from './pages/About'
import { FAQ } from './pages/FAQ'
import { AirdropDetails } from './pages/AirdropDetails'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="checker" element={<Checker />} />
          <Route path="checker/:id" element={<AirdropDetails />} />
          <Route path="history" element={<History />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App