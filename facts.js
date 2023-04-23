import react, { Component } from "react";
import Navbar from "./nav";
import Main from "./main";

class Facts extends Component {
    render() {
        return (
            <div className="container">
                <Navbar/>
                <Main/>
            </div>
        );
    }
}

export default Facts;
