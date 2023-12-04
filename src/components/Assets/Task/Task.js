import React, { useState, useEffect } from 'react';
import './Task.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';


function Task() {
    const [allTodos, setAllTodos] = useState([]);
    const [newTodoTank, setNewTodoTank] = useState([]);
    const [newTodoAction, setNewTodoAction] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [completedTodos, setCompletedTodos] = useState([]);
    const [isCompletedScreen, setIsCompletedScreen] = useState(false);

    const handleAddNewToDo = () => {
        let newToDoObj = {
            tank: newTodoTank,
            action: newTodoAction,
            description: newDescription,
        };
        // console.log (newToDoObj);
        let updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newToDoObj);
        // console.log (updatedTodoArr);
        setAllTodos(updatedTodoArr);
        localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
        setNewTodoTank('');
        setNewTodoAction('');
        setNewDescription('');
    };

    useEffect(() => {
        let savedTodos = JSON.parse(localStorage.getItem('todolist'));
        let savedCompletedToDos = JSON.parse(
            localStorage.getItem('completedTodos')
        );
        if (savedTodos) {
            setAllTodos(savedTodos);
        }

        if (savedCompletedToDos) {
            setCompletedTodos(savedCompletedToDos);
        }
    }, []);

    const handleToDoDelete = index => {
        let reducedTodos = [...allTodos];
        reducedTodos.splice(index, 1);
        // console.log (index);

        // console.log (reducedTodos);
        localStorage.setItem('todolist', JSON.stringify(reducedTodos));
        setAllTodos(reducedTodos);
    };

    const handleCompletedTodoDelete = index => {
        let reducedCompletedTodos = [...completedTodos];
        reducedCompletedTodos.splice(index);
        // console.log (reducedCompletedTodos);
        localStorage.setItem(
            'completedTodos',
            JSON.stringify(reducedCompletedTodos)
        );
        setCompletedTodos(reducedCompletedTodos);
    };

    const handleComplete = index => {
        const date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var hh = date.getHours();
        var minutes = date.getMinutes();
        var ss = date.getSeconds();
        var finalDate =
            dd + '-' + mm + '-' + yyyy + ' at ' + hh + ':' + minutes + ':' + ss;

        let filteredTodo = {
            ...allTodos[index],
            completedOn: finalDate,
        };

        // console.log (filteredTodo);

        let updatedCompletedList = [...completedTodos, filteredTodo];
        console.log(updatedCompletedList);
        setCompletedTodos(updatedCompletedList);
        localStorage.setItem(
            'completedTodos',
            JSON.stringify(updatedCompletedList)
        );
        // console.log (index);

        handleToDoDelete(index);
    };

    return (
        <div className="App">
            <h1>ACTION CENTER</h1>
            <div className="todo-wrapper">
                <div className="todo-input">
                    <div className="todo-input-dropdown">
                        <select
                            value={newTodoTank}
                            onChange={e => setNewTodoTank(e.target.value)}
                        >
                            <option value="">Select tank</option>
                            <option value="Tank 1">Tank 1</option>
                            <option value="Tank 1">Tank 2</option>
                            <option value="Tank 3">Tank 3</option>
                            <option value="Tank 4">Tank 4</option>
                            <option value="Tank 5">Tank 5</option>
                        </select>
                    </div>
                    <div className="todo-input-dropdown todo-input-dropdown-action ">
                        <select
                            value={newTodoAction}
                            onChange={e => setNewTodoAction(e.target.value)}
                        >
                            <option value="">Select a action</option>
                            <option value="Turn on temperature unit">Turn on temperature unit</option>
                            <option value="Increase Airflow">Increase Airflow</option>
                            <option value="Open Valve 1">Open Valve 1</option>
                            <option value="Open Valve 2">Open Valve 2</option>
                            <option value="Open Valve 3">Open Valve 3</option>
                            <option value="Open Valve 4">Open Valve 4</option>
                        </select>
                    </div>
                    <div className="todo-input-description">
                        <input
                            type="text"
                            value={newDescription}
                            onChange={e => setNewDescription(e.target.value)}
                            placeholder="Enter quantity / time / etc "
                        />
                    </div>
                    <div className="todo-input-button">
                        <button
                            className="primary-btn"
                            type="button"
                            onClick={handleAddNewToDo}
                        >
                            Initiate Action
                        </button>
                    </div>
                </div>
                <div className="btn-area">
                    <button
                        className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
                        onClick={() => setIsCompletedScreen(false)}
                    >
                        Actions in Progress
                    </button>
                    <button
                        className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
                        onClick={() => setIsCompletedScreen(true)}
                    >
                        Completed
                    </button>
                </div>
                <div className="todo-list-header">
                    <div>TANK</div>
                    <div>ACTION TAKEN</div>
                    <div>UNIT</div>
                    <div>STATUS</div>
                </div>
                <div className='todo-list-container'>
                    <div className="todo-list">
                        {isCompletedScreen === false &&
                            allTodos.map((item, index) => (
                                <div className="todo-list-item" key={index}>
                                    <div className='todo-list-item-selections'>
                                        <h3>{item.tank}</h3>
                                        <h3>{item.action}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div>
                                        <AiOutlineDelete
                                            action="Delete?"
                                            className="icon"
                                            onClick={() => handleToDoDelete(index)}
                                        />
                                        <BsCheckLg
                                            action="Completed?"
                                            className=" check-icon"
                                            onClick={() => handleComplete(index)}
                                        />
                                    </div>
                                </div>
                            ))}

                        {isCompletedScreen === true &&
                            completedTodos.map((item, index) => (
                                <div className="todo-list-item" key={index}>
                                    <div className='todo-list-item-selections-completed'>
                                        <h3>{item.tank}</h3>
                                        <h3>{item.action}</h3>
                                        <p>{item.description}</p>
                                        <p> <i>Completed at: {item.completedOn}</i></p>
                                    </div>
                                    <div>
                                    <AiOutlineDelete
                                    className="icon"
                                    onClick={() => handleCompletedTodoDelete(index)}
                                    />
                                </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;