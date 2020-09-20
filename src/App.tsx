import * as React from 'react';

export default class App extends React.Component {

    state = {
        count: 0,
    }

    onAdd = () => {
        let { count } = this.state;
        this.setState({
            count: count + 1,
        });
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                <h1>hello, Isa</h1>
                <p>how are u</p>
                <button onClick={this.onAdd}>Add</button>
                <p>{count}</p>
            </div>
        );
    }
}