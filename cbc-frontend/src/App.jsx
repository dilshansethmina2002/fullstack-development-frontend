import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminPage } from './pages/AdminPage'
import { LoginPage } from './pages/LoginPage'
import { Testing } from './pages/Testing'
import { Toaster } from 'react-hot-toast'
import { RegisterPage } from './pages/client/RegisterPage'

function App() {
  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
      <Routes>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/testing" element={<Testing/>} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App