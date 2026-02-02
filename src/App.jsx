import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import LandingPage from './pages/landingPage/LandingPage'
import ThankYou from './pages/ThankYou';
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  )
}

export default App