// import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { VStack } from '@chakra-ui/layout';
import Highlights from './components/Highlights';
// import './App.css';

function App() {
  return (
    <div className="App">
      <VStack>
      <Navbar/>
      <Hero/>
      <Highlights/>
      </VStack>
    </div>
  );
}

export default App;
