import { Cart } from "./CartWidget";
import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <div className="container">
                <NavLink className="navbar-brand" to="/"><img src="img/cool-gaming-logo.png" alt="Cool Gaming"/></NavLink>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-secondary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="white" d="M3.75 12H20.25" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path fill="none" stroke="white" d="M3.75 6H20.25" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path fill="none" stroke="white" d="M3.75 18H20.25" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3" href="/">Computadoras</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3" href="/">Accesorios</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3" href="/">Periféricos</a></li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link size-cart py-3 px-0 px-lg-3" href="/"><Cart/></a></li>
                    </ul>
                </div>
            </div>
          </nav>
        </div>
    );
}