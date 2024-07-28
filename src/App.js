import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Projects/>
        </div>
    );
}

export default App;
