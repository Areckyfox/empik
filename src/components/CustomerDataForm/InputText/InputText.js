import React from 'react'

const InputText = ({
  id,
  classes,
  placeholder,
  value,
  setInputState,
  inputState,
}) => {
  return (
    <div className={`form-control ${classes}`}>
      <label htmlFor={id}></label>
      <input
        type='text'
        id={id}
        placeholder={placeholder}
        value={inputState[value]}
        onChange={({ target: { value } }) => {
          const newName = value
          setInputState((prevState) => ({
            ...prevState,
            [value]: newName,
          }))
        }}
      />
    </div>
  )
}

export default InputText
