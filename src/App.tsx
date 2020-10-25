import * as React from 'react';
import DynForm from './DynForm';

export default class App extends React.Component<any, any> {

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
                <button onClick={this.onAdd}>Add</button>
                <p>{count}</p>
                <DynForm
                    loading={true}
                />
            </div>
        );
    }
}