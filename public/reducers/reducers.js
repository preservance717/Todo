export default function addItem(state={todos:[], filterTodos:[]}, action) {
    state.filterTodos = state.todos;

    switch (action.type)
    {
        case 'ADD':
            state.todos.push({todo: action.ele, isDone: false});
            return state;
        case 'TOGGLE':
            state.todos[action.index].isDone = !state.todos[action.index].isDone;
            return state;
        case 'ALL':
            state.filterTodos = state.todos;
            return state;
        case 'ACTIVE':
            state.filterTodos = state.todos.filter(todo=>!todo.isDone);
            return state;
        case 'COMPLETED':
            state.filterTodos = state.todos.filter(todo=>todo.isDone);
            return state;
    }

    return state;
}