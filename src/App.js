import './stylesheet.css';
import './responsive.css';
import Aside from './pages/id/Aside';
import Nav from './pages/id/Nav';
import Header from './pages/id/Header';
import Sections from './pages/id/Sections';
import Footer from './pages/id/Footer';

function App() {
  return (
    <>
      <Aside />
      <div id="main">
        <Nav />
        <Header />
        <Sections />
        <Footer />
      </div>
    </>
  );
}

export default App;
