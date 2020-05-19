export const resetFormHandler = (setInputState) => {
  setInputState({
    userType: 'person',
    fullName: '',
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
}
