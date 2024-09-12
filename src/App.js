import "../src/styles/common.scss";

import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import VideoGallery from "./components/VideoGallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
      <Banner />
      <About />
      <VideoGallery />
      <Services/>

      <Gallery />

      <Contact />
      </div>
    </div>
  );
}

export default App;
