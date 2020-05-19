import React from 'react'
import './editButtons.css'
import { useTranslation } from 'react-i18next'
const EditButtons = ({ buttonHandler, classes }) => {
  const { t } = useTranslation()
  return (
    <div className={`edit-buttons ${classes}`}>
      <button onClick={buttonHandler}>{t('addNewData')}</button>
      <button onClick={() => {}}>{t('edit')}</button>
    </div>
  )
}

export default EditButtons
