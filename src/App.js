import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                { id: 1, desc: 'First todo.' },
                { id: 2, desc: 'Second todo.' },
                { id: 3, desc: 'Third todo.' }
            ]
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='App'>
                <div className='col-6 m-auto mt-5'>
                    <header className='container-fluid d-flex justify-content-between mb-5'>
                        <h1>Todos</h1>
                        <button className='btn btn-dark'>Add todo</button>
                    </header>

                    <ul className='list-group bg-dark'>
                        {
                            this.state.todos.map(todo =>
                                <li key={todo.id}
                                    className='list-group-item bg-dark text-light d-flex justify-content-between px-3'>
                                    <span style={{ alignSelf: 'center' }}>{todo.desc}</span>

                                    <div className='btn-group'>
                                        <button className='btn btn-dark text-info'>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className='btn btn-dark text-danger' onClick={this.removeTodoById(todo.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </li>
                            )
                        }
                    </ul>

                    <div className='container-fluid d-flex justify-content-end mt-5'>
                        <button className='btn btn-dark text-danger'>Clear all</button>
                    </div>
                </div>
            </div>
        );
    }

    removeTodoById(id) {

    }
}

export default App;