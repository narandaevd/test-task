import React from 'react'
import './form.css';

function Form({ onChange }) {
    const inputRef = React.useRef();
    const textareaRef = React.useRef();
    const selectRef = React.useRef();
    function handleChange(e) {
        const inputHTMLElement = inputRef.current;
        const textareaHTMLElement = textareaRef.current;
        const selectHTMLElement = selectRef.current;
        const data = {
            [inputHTMLElement.name]: inputHTMLElement.value,
            [textareaHTMLElement.name]: textareaHTMLElement.value,
            [selectHTMLElement.name]: selectHTMLElement.value,
        }
        onChange(data);
    }
    return (
        <form onChange={handleChange}>
        <input ref={inputRef} type="text" name="inputBlock" />
        <textarea ref={textareaRef} name="textareaBlock" cols="30" rows="10"></textarea>
        <select ref={selectRef} name="selectBlock">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        </form>
    )
}

export default Form