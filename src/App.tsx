import { Header } from './components/Header';
import Hero from './components/Hero';
import { Features } from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;