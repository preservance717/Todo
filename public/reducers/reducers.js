export default function addItem(state={todos:[]}, action) {
    switch (action.type)
    {
        case 'ADD':
            state.todos.push({todo: action.ele, isDone: false});
            return state;
        case 'TOGGLE':
            state.todos[action.index].isDone = !state.todos[action.index].isDone;
            return state;
    }

    return state;
}