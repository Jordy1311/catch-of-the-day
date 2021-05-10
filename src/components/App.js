import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = (fish) => {
        // take copy of existing state (no mutating in react)
        const fishes = {...this.state.fishes};
        // add new fish to existing state
        fishes[`fish${Date.now()}`] = fish;
        // set new fishes object to new complete state
        this.setState({
            fishes // same thing as fishes: fishes - can also be on one line
        });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline='Fresh Seafood Market'/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}

export default App;