import React, { Component } from "react";
import Card from "../Card";
import "./row.css";

export default class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="row">
                {this.props.images.map((value, index) => {
                    return (
                        <Card
                            key={index + this.props.offset}
                            id={index + this.props.offset}
                            image={value}
                            handleHeaderChange={this.props.handleHeaderChange}
                            updateCards={this.props.updateCards}
                            setClicked={this.props.setClicked}
                            resetCards={this.props.resetCards}
                        />
                    );
                })}
            </div>
        );
    }
}