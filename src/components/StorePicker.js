import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
    static propTypes = {
        history: PropTypes.object
    }

    // if you need to access this inside a custom method you must use this syntax
    goToStore = (event) => {
        event.preventDefault();
        const storeName = (this.myInput.current.value);
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please enter a store:</h2>
                    <input type="text" ref={this.myInput} required placeholder="Store name" defaultValue={getFunName()} />
                    <button type="submit">Visit Store</button>
                </form>
        )
    }
}

export default StorePicker;