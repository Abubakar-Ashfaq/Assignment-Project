import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/HNavbar'
import Footer from './components/footer/Footer'
import Loader from './layout/loader/Loader'
import {ToastContainer} from 'react-toastify'
const LazyHomePage = React.lazy(() => import('./pages/HomePage'))
const LazyAboutPage = React.lazy(() => import('./pages/About'))
const LazyContactPage = React.lazy(() => import('./pages/Contactus'))
const LazyDetails = React.lazy(() => import('./pages/Details'))
const LazyRooms = React.lazy(() => import('./pages/Rooms'))
const LazyRegister = React.lazy(() => import('./pages/Register'))
function App() {
  return (
    <div className="App">
      <ToastContainer/>
       <Navbar />
        <Routes>
          <Route
           exact path="/"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyHomePage />
              </React.Suspense>
            }
          />
          <Route
           exact path="/rooms"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyRooms />
              </React.Suspense>
            }
          />
          <Route
          exact path="/about"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyAboutPage />
              </React.Suspense>
            }
          />

          <Route
           exact path="/rooms/details/:id"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyDetails />
              </React.Suspense>
            }
          />

          <Route
           exact path="/contactus"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyContactPage />
              </React.Suspense>
            }
          />
          <Route
           exact path="/register"
            element={
              <React.Suspense fallback={<Loader />}>
                <LazyRegister />
              </React.Suspense>
            }
          />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
