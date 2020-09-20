import * as React from 'react';

export default class App extends React.Component {

    onAdd() {

    }

    render() {
        return (
            <div>
                <h1>hello, Isa</h1>
                <p>how are u</p>
                <button onClick={this.onAdd}>Add</button>
            </div>
        );
    }
}