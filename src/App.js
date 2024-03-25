// import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { VStack } from '@chakra-ui/layout';
import Highlights from './components/Highlights';
import './App.css';
import Latest from './components/Latest';

function App() {
  return (
    <div className="App">
      <VStack>
      <Navbar/>
      <Hero/>
      <Latest/>
      <Highlights/>
      </VStack>
    </div>
  );
}

export default App;
