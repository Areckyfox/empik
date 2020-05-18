export const resetFormHandler = (setInputState) => {
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
