export const getData = (setStater) =>
  fetch('https://photoshop-empik.firebaseio.com/dataClients.json', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((responseData) => {
      const arrayDataClient = []
      for (const key in responseData) {
        arrayDataClient.push({
          id: key,
          userType: responseData[key].userType,
          fullName: responseData[key].fullName,
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
      setStater(arrayDataClient, true)
    })
