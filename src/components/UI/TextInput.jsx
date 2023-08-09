/* 
? ${props.darkModeState ? 'bg-yellow-400 selection:border-hidden active:bg-yellow-200' : 'bg-yellow-200 active:bg-yellow-400 '}
*/

import useFormInput from '../../hooks/useFormInput'

const TextInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useFormInput((value) => value.trim() !== '')

    return <></>
}

export default TextInput
