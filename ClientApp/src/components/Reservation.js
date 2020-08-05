/*
 * Forms
 * https://reactjs.org/docs/forms.html
 *  Handling Multiple Inputs
 * When you need to handle multiple controlled input elements,
 * you can add a name attribute to each element and let the
 * handler function choose what to do based on the value of
 * event.target.name.
 */

import ReactDOM from "react-dom";
import React from "react";

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        // We use the ES6 computed property name syntax to update the state key
        // corresponding to the given input name.
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
