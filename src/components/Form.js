import React from 'react'

const Form = ({inputText, setInput, todo, setTodo}) => {

    const changeHandler = (e)=>{
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(inputText)
        setTodo([
            ...todo, {text:inputText}
        ]);
    }

    return (
        <div className = 'form'>
            <input onChange={changeHandler} type="text" name='listInput' />
            <button onClick = {submitHandler}>Submit</button>
        </div>
    )
}

export default Form
