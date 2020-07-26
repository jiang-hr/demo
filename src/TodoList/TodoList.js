import React, { Component } from 'react'
import { Button, Input, List } from 'antd'
import store from '.'

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
            setTimeout(() => {
                console.log(this.state)
            });
        });
    }

    changeInputValue = (e) => {
        store.dispatch({
            type: 'changeInput',
            value: e.target.value
        });
    }

    addContent = () => {
        if (this.state.content.length)
            store.dispatch({
                type: 'changeList',
            });
    }

    delContent = (index) => {
        store.dispatch({
            type: 'delList',
            number: index
        });
    }

    render() {
        return (
            <div>
                <div style={this.state.styleOne}>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '15px' }}
                        onChange={this.changeInputValue}
                        value={this.state.content}
                    />
                    <Button
                        type="primary"
                        onClick={this.addContent}
                    >add</Button>
                </div>
                <div style={this.state.styleTwo}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => <List.Item
                            onClick={(() => this.delContent(index))}
                        >{item}</List.Item>}
                    />
                </div>
            </div>
        )
    }
}
