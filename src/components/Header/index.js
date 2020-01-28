import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <p>SpongeBob Clicky Game</p>
                <p>{this.props.message}</p>
                <p>
                    Score: {this.props.score} | Top Score: {this.props.topScore}
                </p>
            </div>
        );
    }
}