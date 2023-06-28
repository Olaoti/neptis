import './App.css';
import Header from './Header.js';
import Intro from './Intro.js';
import Features from './Features.js';
import Works from './Works.js';
import Testimonials from './Testimonials.js';
import Pricing from './Pricing.js';
function App() {
  return (
    <div className="app">
      <Header/>
      <Intro/>
      <Features/>
      <Works/>
      <Testimonials/>
      <Pricing/>
    </div>
  );
}

export default App;
