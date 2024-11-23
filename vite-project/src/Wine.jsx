import { Component } from "react";
import './wine.css/'
class Wine extends Component {
    // clicking = () => {
    //     console.log("Button click!");
    // }
    state = {
        message: "Click here",
        clicked: false
    };
    handler = () => {
        this.setState({ message: "Clicked", clicked:true})
    }
    render() {
        const { title, description, rating } = this.props;
        const { message, clicked } = this.state;
        let className = "clicked-button";

        if (!clicked) {
            className += " clicked-button_red";
        } else {
            className += " clicked-button_grey";
        }

        return (
            <div className="wine">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{rating}</p>
                <hr />
                <button className={className} onClick={this.handler} type="button">{message}
                </button>
            </div>
        )
    }
}
export default Wine