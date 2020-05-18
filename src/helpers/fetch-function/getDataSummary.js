export const getDataSummary = (setStater) =>
  fetch('https://photoshop-empik.firebaseio.com/SumaryOrder.json', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((responseData) => {
      // console.log(responseData)

      const arrayDataSummary = []
      for (const key in responseData) {
        arrayDataSummary.push({
          id: key,
          summaryProducts: responseData[key].summaryProducts,
          vatValue: responseData[key].vatValue,
          deliveryCost: responseData[key].deliveryCost,
          sum: responseData[key].sum,
        })
      }
      setStater([arrayDataSummary, true])
    })
