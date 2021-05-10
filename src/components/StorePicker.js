import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    // if you need to access this inside a custom method you must use this syntax
    goToStore = (event) => {
        event.preventDefault();
        console.log(this);
    }

    render() {
        return (
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please enter a store:</h2>
                    <input ref={this.myInput} type="text" required placeholder="Store name" defaultValue={getFunName()} />
                    <button type="submit">Visit Store</button>
                </form>
        )
    }
}

export default StorePicker;