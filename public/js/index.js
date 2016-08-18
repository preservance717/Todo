import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import addItem from '../reducers/reducers';

let store = createStore(addItem);

class App extends React.Component {
    addTodo(ele) {
        store.dispatch({type: 'ADD', ele});//生成action
    }

    render() {
        return <div>
            <AddTodo addTodo={this.addTodo.bind(this)}/>
            <TodoList todos={store.getState().todos}/>
        </div>
    }
}

class TodoList extends Component {
    toggle(index){
        this.props.toggle(index);
    }
    render() {
        return <div>
            {
                this.props.todos.map((ele, index)=> {
                    return <div key={index}>
                        <input type="checkbox" onClick={this.toggle.bind(this, index)}/>{ele.todo}
                    </div>
                })}
        </div>
    }
}

class AddTodo extends Component {
    addTodo() {
        const ele = this.refs.input.value;
        this.props.addTodo(ele);
        this.refs.input.value = '';
    }

    render() {
        return <div>
            <input type="text" ref="input"/>
            <button onClick={this.addTodo.bind(this)}>+</button>
        </div>
    }
}

function fsubscribe() {
    render(<App/>, document.getElementById('root'));
}
store.subscribe(fsubscribe);

fsubscribe();