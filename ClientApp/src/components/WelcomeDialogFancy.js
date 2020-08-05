/*
 * Composition vs Inheritance
 * https://reactjs.org/docs/composition-vs-inheritance.html
 * Containment
 * React has a powerful composition model and we recommend using composition
 * instead of inheritance to reuse code between components.
 */

import ReactDOM from "react-dom";
import React from "react";

// Some components do not know their children ahead of time.
// This is especially common for components like Sidebar or Dialog that represent generic “boxes”.
// We recommend that such components use the special children prop to pass children elements
// directly into their output.

// Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component
// as a children prop. Since FancyBorder renders {props.children} inside a <div>,
// the passed elements appear in the final output.
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

// Create a WelcomeDialg using FancyBorder.
function WelcomeDialogFancy() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

// ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root')
// );
