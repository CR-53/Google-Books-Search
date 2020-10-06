import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
    return (
        <div className="container search-box">
            <div className="row">
                <div className="col-md-12">
                    <h2>React Google Books Search</h2>
                    <h4>Search and save books of interest</h4>
                </div>
            </div>
        </div>
    );
}

export default Header;