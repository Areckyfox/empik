import React, { useState, useEffect } from 'react'

import { useTranslation } from 'react-i18next'
import Loadingindicator from '../UI/LoadingIndicator'
import './customerDataForm.css'

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
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    fetch('https://photoshop-empik.firebaseio.com/dataClients.json', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)

        const arrayDataClient = []
        for (const key in responseData) {
          arrayDataClient.push({
            id: key,
            userType: responseData[key].userType,
            companyName: responseData[key].companyName,
            nip: responseData[key].nip,
            country: responseData[key].country,
            street: responseData[key].street,
            streetNumber: responseData[key].streetNumber,
            postalCode: responseData[key].postalCode,
            town: responseData[key].town,
            codeNumberPhone: responseData[key].codeNumberPhone,
            phoneNumber: responseData[key].phoneNumber,
            wantPaperRecipt: responseData[key].wantPaperRecipt,
          })
        }
        setDataState(arrayDataClient)
      })
  }, [])

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
        resetFormHandler()
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
  const resetFormHandler = () => {
    setInputState({
      privatePerson: false,
      companyName: '',
      nip: '',
      country: '',
      street: '',
      streetNumber: '',
      postalCode: '',
      town: '',
      codeNumberPhone: '00',
      phoneNumber: '',
      wantPaperRecipt: null,
    })
  }

  return (
    <section className='data-form span-1-of-1 display-inlineB'>
      <div>{JSON.stringify(dataState)}</div>
      <h1>{t('paymentMethod')}</h1>
      <div className='left-site span-2-of-3 display-inlineB'>
        <h2>{t('details')}</h2>
        <form className='span-1-of-2 display-inlineB' onSubmit={submitHandler}>
          <div className='form-control'>
            <label htmlFor='person'>Private Person</label>
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
            <label htmlFor='company'></label>
            <input
              type='radio'
              id='company'
              name='userType'
              value='company'
              onChange={({ target: { value } }) => {
                setInputState((prevState) => ({
                  ...prevState,
                  userType: value,
                }))
              }}
            />
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
          <div className='form-control'>
            <label htmlFor='wantPaperRecipt'>
              Want paper recipt
              <input
                type='checkbox'
                id='want-paper-recipt'
                checked={inputState.wantPaperRecipt}
                onChange={({ target: { checked } }) => {
                  setInputState((prevState) => ({
                    ...prevState,
                    wantPaperRecipt: !prevState.wantPaperRecipt,
                  }))
                }}
              />
            </label>
          </div>
          <div className='customer-data-form__actions'>
            {loader && <Loadingindicator />}
            <div className='span-3-of-4 display-inlineB'>
              <button type='submit'>Save</button>
            </div>
          </div>
        </form>
        <div className='information-vat span-1-of-2 display-inlineB'>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias unde
            ipsam, atque minus adipisci eveniet sit molestiae accusamus dicta
            neque aspernatur tempore corrupti sunt voluptate distinctio
          </span>
        </div>
      </div>
      <div className='right-site span-1-of-3 display-inlineB'></div>
    </section>
  )
}

export default CustomerDataForm
