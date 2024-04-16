// import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import { VStack } from '@chakra-ui/layout';
import Highlights from './components/Highlights';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ComingSoon from './components/ComingSoon'
import Home from './components/Home'
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="App">
      <Router>
      <VStack>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<ComingSoon/>} />
        <Route path="/contact" element={<ComingSoon/>} />
        <Route path="/latest" element={<ComingSoon/>} />
        <Route path="/lifestyle" element={<ComingSoon/>} />
        <Route path="/creating" element={<ComingSoon/>} />
        <Route path="/school" element={<ComingSoon/>} />
        <Route path="/travel" element={<ComingSoon/>} />
        <Route path="/blogpost" element={<BlogPost/>} />
      </Routes>
      </VStack>
      </Router>
    </div>
  );
}

export default App;
