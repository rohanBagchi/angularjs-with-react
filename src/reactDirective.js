import app from './app'
import React from "react";
import ReactDOM from "react-dom";
import ReactApp from "./react/ReactApp";

const reactDirective = app.directive('reactDirective', function () {
    return {
        template: '<div id="react-part"></div>',
        link: function () {
            const reactapp = document.getElementById('react-part')
            ReactDOM.render(
                <ReactApp />,
                reactapp
            );
        }

    }
});

export default reactDirective