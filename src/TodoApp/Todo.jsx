import React, { useState } from 'react'

function Todo() {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [main, setMain] = useState([])


    const titleValue = (e) => {
        setTitle(e.target.value)
    }
    const descValue = (e) => {
        setDesc(e.target.value)
    }


    const submitHandler = (e) => {
        setMain([...main, { title, desc }])
        setTitle('')
        setDesc('')
        console.log(main)
        e.preventDefault()

    }
    const deleteHandler = (i) => {
        let copyTask = [...main]
        copyTask.splice(i, 1)
        setMain(copyTask)
    }

    let renderTask = <h3>No Task here</h3>
    if (main.length > 0) {
        renderTask = main.map((t, i) => {
            return (
                <div className='mainTaskContainer'>
                    <ul>
                        <li className='contentList'>
                            <div className='mainTaskList'>
                                <h2>{t.title}</h2>
                                <p>{t.desc}</p>

                            </div>
                            <button onClick={() => {
                                deleteHandler(i)
                            }}>Delete</button>

                        </li>

                    </ul>

                </div>
            )
        });
    }


    return (
        <div>
            <div className='container'>
                <h1>My Todo App</h1>
                <div className="todoInputBox">
                    <form onSubmit={submitHandler}>
                        <div className="inputBox">
                            <input onChange={titleValue} inputfield type="text" placeholder='Enter Your Title' value={title} />
                            <input onChange={descValue} inputfield type="text" placeholder='Enter Your Description' value={desc} />
                        </div>

                        <button>Add Your Todo List</button>
                    </form>
                </div>

                <div className="listContainer">
                    <ul>
                        {renderTask}
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Todo