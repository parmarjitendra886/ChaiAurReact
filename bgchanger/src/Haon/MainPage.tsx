import { Route, Routes } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import News from "./Components/News";
import NewsSingle from "./Components/NewsSingle";


const MainPage = () => {
  return (
    <div>
        <Header />
        <div className="content mb-5">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsSingle />} />
            </Routes>
        </div>
        <Footer />
    </div>
    );
}

export default MainPage;