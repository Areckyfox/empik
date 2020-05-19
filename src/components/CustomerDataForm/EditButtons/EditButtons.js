import React from 'react'
import './editButtons.css'
const EditButtons = ({ buttonHandler, classes }) => {
  return (
    <div className={`edit-buttons ${classes}`}>
      <button onClick={buttonHandler}>dodaj nowe dane</button>
      <button onClick={() => {}}>edytuj</button>
    </div>
  )
}

export default EditButtons
