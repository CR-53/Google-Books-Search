import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Search() {
    return (
        <div>
            <div className="container search-box">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="section-heading">Book Search</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                {/* <Form.Label>Book</Form.Label> */}
                                <Form.Control type="text" placeholder="Search for a book" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="container results">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="section-heading">Results</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;