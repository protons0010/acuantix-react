import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about.js";
import Portfolio from "./components/portfolio";
import News from "./components/news";
import Footer from "./components/footer";
import Copyright from "./components/copyright";


function App() {
  return (
    <>
  <div id="fh5co-hero-carousel" class="carousel slide header" data-ride="carousel">
    
    <Navbar />
    <Header />

   </div>

   <About />

   <Portfolio />
   <News />
   <Footer />
   <Copyright />





</>
 
  );
}

export default App;
