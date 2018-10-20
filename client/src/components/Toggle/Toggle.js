import React, { component } from "react";


export default class Toggle extends component {
    state = {
        on: false,
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (
            <div>
                {this.state.on && <h1>Description</h1>}
                <button onClick={this.toggle}>Show/Hide</button>
            </div>
        );
    }
}