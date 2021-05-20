import React from 'react';
import PropTypes from 'prop-types';

// This is a stateless functional component. You can use these for components that dont have any methods and just take data that is passed from props. This component has been slimmed down by an ES6 arrow function.

const Header = (props) => (
    <header className="top">
        <h1>
            Catch
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span> 
            Day
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default Header;