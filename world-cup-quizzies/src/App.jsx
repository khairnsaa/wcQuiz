import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Front from './pages/front'
import Quiz from './pages/quiz'
import Record from "./pages/record";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Front />} />
            <Route exact path="/quizes" element={<Quiz />} />
            <Route exact path="/record" element={<Record />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
