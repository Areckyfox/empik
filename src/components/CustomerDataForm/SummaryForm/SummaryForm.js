import React from 'react'
import './summaryForm.css'
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
  return (
    <div className='summary-form span-1-of-2 display-inlineB'>
      <div className='information-type-user '>
        <span>{userType === 'company' ? 'Firma' : 'Osoba prywatna'}</span>
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
        <span>{`ul ${street} ${streetNumber}`}</span>
        <span>{`${postalCode} ${town}, ${country}`}</span>
        <span>{`tel. (${codeNumberPhone}) ${phoneNumber}`}</span>
      </div>
      <div className='want-paper-recipt'>
        {wantPaperRecipt && <span>Chcę otrzymać papierową fakturę</span>}
      </div>
    </div>
  )
}
export default SummaryForm
