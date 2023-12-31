import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    // const onInputChange = (e) => {
    //     setInputValue(e.target.value)
    // }
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim())
        setInputValue('');

    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="search GIF's"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
