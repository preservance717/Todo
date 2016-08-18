import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import addItem from '../reducers/reducers';

let store = createStore(addItem);

class App extends React.Component {
    addTodo(ele) {
        store.dispatch({type: 'ADD', ele});//生成action
    }

    toggle(index){
        store.dispatch({type:'TOGGLE', index});
    }

    filter(filterName){
        store.dispatch({type: filterName});
    }

    render() {
        return <div>
            <AddTodo addTodo={this.addTodo.bind(this)}/>
            <TodoList todos={store.getState().filterTodos} toggle={this.toggle.bind(this)}/>
            <Footer filter={this.filter.bind(this)}/>
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
                        <input type="checkbox" checked={ele.isDone} onClick={this.toggle.bind(this, index)}/>
                        <span style={{'textDecoration':ele.isDone?'line-through':''}}>{ele.todo}</span>
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

class Footer extends Component{
    filter(filterName){
        this.props.filter(filterName);
    }
    render(){
        return <div>
            <button onClick={this.filter.bind(this, 'ALL')}>All</button>
            <button onClick={this.filter.bind(this, 'ACTIVE')}>Active</button>
            <button onClick={this.filter.bind(this, 'COMPLETED')}>Completed</button>
        </div>
    }
}

function fsubscribe() {
    render(<App/>, document.getElementById('root'));
}
store.subscribe(fsubscribe);

fsubscribe();