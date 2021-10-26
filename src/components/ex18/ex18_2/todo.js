import React from "react";

const Todo = () => {
    const [tasks, setTasks] = React.useState(
        [
            {name: "CSS", completed: true},
            {name: "JavaScript", completed: true},
            {name: "Learn React", completed: false},
            {name: "Learn mongoDB", completed: false},
            {name: "Learn Node JS", completed: false},
        ]);

    function handleClick(item) {
        let tempObj = [...tasks];
        let state = tempObj[tempObj.indexOf(item)].completed;
        tempObj[tempObj.indexOf(item)].completed = !state;
        setTasks(tempObj);
    }

    return (
        <ul style={{fontSize: '50px'}}>
            {tasks.map(item => (
                <li>
                    <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.name}</span>
                    <span style={{cursor: 'pointer'}} onClick={()=>handleClick(item)}>{item.completed ? '\u2716' : '\u2713'}</span>
                </li>
            ))}
        </ul>);
}

export default Todo;