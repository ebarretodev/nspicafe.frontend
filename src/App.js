import './styles/css/antd.css'
import "./App.css"
import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import Dashboard from './Pages/Dashboard';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Home />} />
            <Route path="" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App
