// useEffect document.title을 추가로 넣어서 상단바 제목 내용을 변경하기
// map을 활용하여 TodoList 하나 더 만드는 작업하기
// useCallback을 써서 증가<button>을 하나 만들기

import React, {useCallback ,useState, useEffect} from 'react';

function ExampleCallBack() {
    const [count, setCount] = useState(0);
    const inClick = useCallback (() => {
        setCount(count + 1);
    }, [count]);
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick = {inClick}>증가하기</button>
        </div>
    )
}

const TodoList = () => {
    const [todos, setTodos] = useState([]); // 할 일 목록 배열을 위한 state 생성
    const [newTodo, setNewTodo] = useState(''); // 할 일 추가하기 위한 input String state 생성
    const [count, setCount] = useState(0); // 할 일이 추가될 때마다 자동으로 할 일 갯수 추가해주는 count state 생성

    const addTodo = useCallback(() => { // 할 일이 추가될 때 사용하는 함수
        if(newTodo.trim() !== ''){ // 공백이 아니라면 작성
            setTodos([...todos, newTodo]);
            setNewTodo('');
            // 할 일이 추가될 때마다 count 증가
            setCount(count + 1);
        }
    });

    const removeTodo = useCallback((index) => { // 할 일을 삭제하는 함수
        const updateTodos = [...todos];
        updateTodos.splice(index, 1);
        setTodos(updateTodos);

        // 할 일 삭제할 경우 count 감소
        setCount(count - 1);
    })
    /*
    const increaClick = useCallback(() => {
        setCount(count + 1);
    }, [count]); */

    useEffect (() => {
        document.title = 'todoList ' + `${count}` + '개';
        console.log('count 변경: ' + count);
    }, [count])

    return (
        <div>
            <h2>나의 To do List</h2>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>추가</button>

                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => removeTodo(index)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function MiniApp() {
    return ( // div로 감싸주지 않으면 함수명과 동등한 위치라고 인식하기 때문에 꼭 div 안에 넣어주어야 함 !
        <div> 
            <ExampleCallBack />
            <TodoList />
        </div>
    )
}

export default TodoList;
