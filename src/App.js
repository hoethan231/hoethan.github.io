import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import Loader from './components/Loader/Loader.jsx';
import './App.css';

function App() {

    return (
        <div className="app-container">
            {/* <Loader /> */}
            <Hero />
            <Projects />
        </div>
    );
} 

export default App;