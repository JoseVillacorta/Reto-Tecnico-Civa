import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BusTable } from './components/BusTable';
import { BusDetail } from './components/BusDetail';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Ruta para la tabla principal */}
          <Route path="/" element={<BusTable />} />

          {/* Ruta para el detalle del bus */}
          <Route path="/bus/:id" element={<BusDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
