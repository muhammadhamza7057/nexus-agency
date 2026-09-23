import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsAppButton from './components/layout/FloatingWhatsAppButton';
import CustomCursor from './components/layout/CustomCursor';
import Home from './pages/Home';
import './styles/globals.css';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Home />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
