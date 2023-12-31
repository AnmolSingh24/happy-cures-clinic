import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Blogs from "./components/pages/blogs"
import Gallery from "./components/pages/gallery"
import Appointment from "./components/pages/appointment"
import Service from "./components/pages/service"

const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div >
  );
}

export default App;