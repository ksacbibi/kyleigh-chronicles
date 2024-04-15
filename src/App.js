// import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import { VStack } from '@chakra-ui/layout';
import Highlights from './components/Highlights';
import { Routes, Route } from "react-router-dom";
import './App.css';
import ComingSoon from './components/ComingSoon'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <VStack>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<ComingSoon/>} />
      </Routes>
      </VStack>
    </div>
  );
}

export default App;
