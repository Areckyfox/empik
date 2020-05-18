import React from 'react'
import i18n from 'i18next'

const LngSelect = () => (
  <fieldset>
    {['pl', 'en'].map((lng) => (
      <label key={lng}>
        {lng}
        <input
          type='radio'
          value={lng}
          name='lang'
          onChange={() => i18n.changeLanguage(lng)}
          defaultChecked={lng === 'pl'}
        />
      </label>
    ))}
  </fieldset>
)

export default LngSelect
