import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

export function NotFoundPage() {
    return (
        <div className="App">
            <header className="masthead text-center">
                <NavBar />
            </header>
            <div className="container">
                <h1><span style={{ color: "#009cff" }}>404</span><br />
                    Not Found</h1>
            </div>
            <Footer />
        </div>
    )
}
