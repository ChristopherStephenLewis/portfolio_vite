import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import Experience from './components/pages/Experience/Experience';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Work from './components/pages/Work/Work';

function App() {
    return (
        <>
            <Header></Header>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/work" element={<Work />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
