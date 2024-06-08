// import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import { VStack } from '@chakra-ui/layout';
import Highlights from './components/Highlights';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import './App.css';
import ComingSoon from './components/ComingSoon'
import Home from './components/Home'
import BlogPost from './components/BlogPost';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <VStack>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<ComingSoon/>} />
        <Route path="/contact" element={<ComingSoon/>} />
        <Route path="/latest" element={<BlogPost postId={'66613b6eee2910180b4d53d5'}/>} />
        <Route path="/lifestyle" element={<ComingSoon/>} />
        <Route path="/creating" element={<ComingSoon/>} />
        <Route path="/school" element={<ComingSoon/>} />
        <Route path="/travel" element={<ComingSoon/>} />
        <Route path="/blogpost/:postId" element={<BlogPostWrapper />} />
      </Routes>
      </VStack>
      <ScrollToTop />
    </div>
  );
}

const BlogPostWrapper = () => {
  const { postId } = useParams();
  return <BlogPost postId={postId} />;
};


export default App;
