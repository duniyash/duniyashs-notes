import { useState } from 'react'

const useFormInput = (validateFunction) => {
    const [enteredValue, setEnteredValue] = useState()
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateFunction(enteredValue) && isTouched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset: () => {
            setEnteredValue('')
            setIsTouched(false)
        },
    }
}

export default useFormInput
