import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";

const NavBar = function() {
    return(
    <div id="navigationsidebar">
    <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left style=width:200px;" id="mySidebar">
    <button className="w3-bar-item w3-button w3-large w3-hide-large"></button>
    <a href="#" className="w3-bar-item w3-button">Link 1</a>
    <a href="#" className="w3-bar-item w3-button">Link 2</a>
    <a href="#" className="w3-bar-item w3-button">Link 3</a>
    </div>
    </div>
        
    );
}

export default NavBar;