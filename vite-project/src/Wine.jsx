import { Component } from "react";

export default class Wine extends Component {
    clicking = () => {
        console.log("Button click!");
    }
    render() {
        const { title, description, rating } = this.props;
        return (
            <div className="wine">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{rating}</p>
                <hr />
                <button type="button" onClick={this.clicking}>
                    Click
                </button>
            </div>
        )
    }
}