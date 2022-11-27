import './App.css'
import HomeScreen from './HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'


function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/detail/:prodId" element={<ProductDetail />} >
          </Route>
        </Routes>
      </Router> */}

      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/detail/:prodId" element={<ProductDetail />}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
