import React, { useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import Loadingindicator from '../UI/LoadingIndicator'
import SumaryOrder from '../CustomerDataForm/SumaryOrder/SumaryOrder'
import './customerDataForm.css'
import './checkbox.css'
import './radio.css'

import { getData } from '../../helpers/fetch-function/getData'
import { getDataSummary } from '../../helpers/fetch-function/getDataSummary'
import { resetFormHandler } from '../../helpers/handlers/resetFormHandler'
// import InputText from '../CustomerDataForm/InputText/InputText'

const CustomerDataForm = () => {
  const { t } = useTranslation()
  const [inputState, setInputState] = useState({
    userType: 'person',
    companyName: '',
    nip: '',
    country: '',
    street: '',
    streetNumber: '',
    postalCode: '',
    town: '',
    codeNumberPhone: '00',
    phoneNumber: '',
    wantPaperRecipt: false,
  })
  // eslint-disable-next-line
  const [dataState, setDataState] = useState([])
  const [dataSummary, setDataSumary] = useState([[], false])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    getData(setDataState)
  }, [])
  useEffect(() => {
    getDataSummary(setDataSumary)
  }, [])
  // const addSummary = {
  //   summaryProducts: '35,92',
  //   vatValue: '-3,21',
  //   deliveryCost: '00,00',
  //   sum: '32,71',
  // }
  const addCustomerData = (dataClient) => {
    setLoader(true)
    fetch('https://photoshop-empik.firebaseio.com/dataClients.json', {
      method: 'POST',
      body: JSON.stringify(dataClient),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        setLoader(false)
        return response.json()
      })
      .then((responseData) => {
        setDataState((prevData) => [
          ...prevData,
          { id: responseData.name, ...dataClient },
        ])
        resetFormHandler(setInputState)
      })
      .catch((error) => {
        // setError('somthing went wrong try again')
        // setLoader(false)
      })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    addCustomerData({
      userType: inputState.userType,
      companyName: inputState.companyName,
      nip: inputState.nip,
      country: inputState.country,
      street: inputState.street,
      streetNumber: inputState.streetNumber,
      postalCode: inputState.postalCode,
      town: inputState.town,
      codeNumberPhone: inputState.codeNumberPhone,
      phoneNumber: inputState.phoneNumber,
      wantPaperRecipt: inputState.wantPaperRecipt,
    })
  }

  const rightSiteLoaded = dataSummary[1] ? (
    <SumaryOrder dataSummary={dataSummary[0][0]} />
  ) : null

  return (
    <section className='data-form span-1-of-1 display-inlineB'>
      {/* <div>{JSON.stringify(dataState)}</div> */}
      {/* <div>{JSON.stringify(dataSummary)}</div> */}
      <h1>{t('paymentMethod')}</h1>
      <div className='left-site span-2-of-3 display-inlineB'>
        <h2>{t('details')}</h2>
        <form className='span-1-of-2 display-inlineB' onSubmit={submitHandler}>
          <div className='form-control radio'>
            <input
              type='radio'
              id='person'
              name='userType'
              value='person'
              onChange={({ target: { value } }) => {
                setInputState((prevState) => ({
                  ...prevState,
                  userType: value,
                }))
              }}
              defaultChecked
            />
            <label htmlFor='person'></label>
            <span>{t('privatePerson')}</span>
            <input
              type='radio'
              id='company'
              name='userType'
              value='company'
              onChange={({ target: { value } }) => {
                console.log('changeRadio')

                setInputState((prevState) => ({
                  ...prevState,
                  userType: value,
                }))
              }}
            />
            <label htmlFor='company'></label>
            <span>Company</span>
          </div>

          <div className='form-control'>
            <label htmlFor='company-name'></label>
            <input
              required
              type='text'
              id='company-name'
              placeholder={'Company name'}
              value={inputState.companyName}
              onChange={(event) => {
                const newName = event.target.value
                setInputState((prevState) => ({
                  ...prevState,
                  companyName: newName,
                }))
              }}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='nip'></label>
            <input
              type='text'
              id='nip'
              placeholder={'NIP'}
              value={inputState.nip}
              onChange={(event) => {
                const newName = event.target.value
                setInputState((prevState) => ({
                  ...prevState,
                  nip: newName,
                }))
              }}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='country'></label>
            <input
              type='text'
              id='country'
              placeholder={'Country'}
              value={inputState.country}
              onChange={(event) => {
                const newName = event.target.value
                setInputState((prevState) => ({
                  ...prevState,
                  country: newName,
                }))
              }}
            />
          </div>

          <div className='form-control span-3-of-4 display-inlineB less-width'>
            <label htmlFor='street'></label>
            <input
              type='text'
              id='street'
              placeholder={'Street'}
              value={inputState.street}
              onChange={(event) => {
                const newName = event.target.value
                setInputState((prevState) => ({
                  ...prevState,
                  street: newName,
                }))
              }}
            />
          </div>

          <div className='form-control span-1-of-4 display-inlineB'>
            <label htmlFor='street-number'></label>
            <input
              type='text'
              id='street-number'
              placeholder={'Street number'}
              value={inputState.streetNumber}
              onChange={(event) => {
                const newName = event.target.value
                setInputState((prevState) => ({
                  ...prevState,
                  streetNumber: newName,
                }))
              }}
            />
          </div>

          <div className='form-control span-1-of-4 display-inlineB'>
            <label htmlFor='postal-code'></label>
            <input
              type='text'
              id='postal-code'
              placeholder={'00 - 000'}
              value={inputState.postalCode}
              onChange={(event) => {
                const newName = event.target.value
                setInputState((prevState) => ({
                  ...prevState,
                  postalCode: newName,
                }))
              }}
            />
          </div>

          <div className='form-control span-3-of-4 display-inlineB less-width-margin-left'>
            <label htmlFor='town'></label>
            <input
              type='text'
              id='town'
              placeholder={'Town'}
              value={inputState.town}
              onChange={(event) => {
                const newName = event.target.value
                setInputState((prevState) => ({
                  ...prevState,
                  town: newName,
                }))
              }}
            />
          </div>

          <div className='form-control span-1-of-4 display-inlineB'>
            <label htmlFor='code-number-phone'></label>
            <select
              className='select-css'
              id='code-number-phone'
              value={inputState.codeNumberPhone}
              onChange={(event) => {
                const newName = event.target.value
                setInputState((prevState) => ({
                  ...prevState,
                  codeNumberPhone: newName,
                }))
              }}>
              <option value='00'>+00</option>
              <option value='01'>+01</option>
              <option value='02'>+02</option>
              <option value='03'>+03</option>
            </select>
          </div>

          <div className='form-control span-3-of-4 display-inlineB less-width-margin-left'>
            <label htmlFor='phone-number'></label>
            <input
              type='text'
              id='phone-number'
              placeholder={'Phone'}
              value={inputState.phoneNumber}
              onChange={(event) => {
                const newName = event.target.value
                setInputState((prevState) => ({
                  ...prevState,
                  phoneNumber: newName,
                }))
              }}
            />
          </div>
          <div className='form-control checkbox'>
            <input
              type='checkbox'
              id='want-paper-recipt'
              checked={!!inputState.wantPaperRecipt}
              onChange={({ target: { checked } }) => {
                setInputState((prevState) => ({
                  ...prevState,
                  wantPaperRecipt: !prevState.wantPaperRecipt,
                }))
              }}
            />
            <label htmlFor='wantPaperRecipt'></label>
            <span>{t('paperRecipt')}</span>
          </div>
          <div className='customer-data-form__actions'>
            {loader && <Loadingindicator />}
            <div className='span-3-of-4 display-inlineB'>
              <button type='submit'>{t('save')}</button>
            </div>
          </div>
        </form>
        <div className='information-vat span-1-of-2 display-inlineB'>
          <span>
            Na nasze usługi aplikuje się przeniesienie stawki VAT. Odbiorca ma
            obowiązek zapłacenia VATu. Podana cena jest ceną netto
          </span>
        </div>
      </div>
      {rightSiteLoaded}
    </section>
  )
}

export default CustomerDataForm
