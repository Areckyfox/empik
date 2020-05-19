import React from 'react'
import './summaryForm.css'
import { useTranslation } from 'react-i18next'
const SummaryForm = ({
  dataState: {
    userType,
    fullName,
    companyName,
    nip,
    country,
    street,
    streetNumber,
    postalCode,
    town,
    codeNumberPhone,
    phoneNumber,
    wantPaperRecipt,
  },
}) => {
  const { t } = useTranslation()
  return (
    <div className='summary-form span-1-of-2 display-inlineB'>
      <div className='information-type-user '>
        <span>
          {userType === 'company' ? t('company') : t('privatePerson')}
        </span>
        <img src='' alt='' />
      </div>
      <div className='summary'>
        {userType === 'company' ? (
          <>
            <span>{companyName}</span>
            <span>{`NIP ${nip}`}</span>
          </>
        ) : (
          <span>{fullName}</span>
        )}
        <span>{`${t('shortStreet')} ${street} ${streetNumber}`}</span>
        <span>{`${postalCode} ${town}, ${country}`}</span>
        <span>{`${t('shortPhone')}. (${codeNumberPhone}) ${phoneNumber}`}</span>
      </div>
      <div className='want-paper-recipt'>
        {wantPaperRecipt && <span>{t('paperRecipt')}</span>}
      </div>
    </div>
  )
}
export default SummaryForm
