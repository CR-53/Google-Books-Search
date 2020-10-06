import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Saved() {
    return (
        <div className="container search-box">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="section-heading">Saved Books</h3>
                </div>
            </div>
        </div>
    );
}

export default Saved;