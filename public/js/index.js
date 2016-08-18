import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import addItem from '../reducers/reducers';

let store = createStore(addItem);

class App extends React.Component {
    addTodo(ele){
        store.dispatch({type: 'ADD', ele});//生成action
    }
    render() {
        return <div>
            <AddTodo addTodo={this.addTodo.bind(this)}/>
        </div>
    }
}

class AddTodo extends Component{
    addTodo(){
        const ele = this.refs.input.value;
        this.props.addTodo(ele);
    }
    render(){
        return <div>
            <input type="text" ref="input"/>
            <button onClick={this.addTodo.bind(this)}>+</button>
        </div>
    }
}
render(<App/>, document.getElementById('root'));