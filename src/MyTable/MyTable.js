import React, { Component } from 'react'
import { Button, Input, List } from 'antd'
import store from '.'

export default class MyTable extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState())
        });
    }

    addTitle() {
        const action = {
            type: 'addTitle',
        };
        store.dispatch(action);
    }

    render() {
        return (
            <div>
                <Button
                    type='dashed'
                    onClick={this.addTitle.bind(this)}
                    style={{ margin: '30px' }}
                >按下+++</Button>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}
