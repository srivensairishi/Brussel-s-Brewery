
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Blog from './components/Blog/Blog.jsx'
import FollowUs from './components/FollowUs/FollowUs.jsx'
import Menu from './components/Menu/Menu.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/follow-us" element={<FollowUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
