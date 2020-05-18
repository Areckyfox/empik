import React from 'react'
import './summaryOrder.css'

const SumaryOrder = ({ dataSummary }) => {
  console.log(dataSummary)
  return (
    <div className='right-site span-1-of-3 display-inlineB'>
      <h2>Podsumowanie:</h2>
      <div className='details'>
        <div className='details-block'>
          <span className='name'>Wartość Produktów:</span>
          <span className='value'>{`${dataSummary.summaryProducts} zł`}</span>
        </div>
        <div className='details-block'>
          <span className='name'>Wartość VAT(23%):</span>
          <span className='value'>{dataSummary.vatValue}</span>
        </div>
        <div className='details-block'>
          <span className='name'>Koszt dostawy:</span>
          <span className='value'>{`${dataSummary.deliveryCost} zł`}</span>
        </div>
      </div>
      <div className='summary'>
        <div className='summary-block'>
          <span className='name'>Suma</span>
          <span className='value'>{`${dataSummary.sum} zł`}</span>
        </div>
        <button className='disabled'>Przejdź dalej</button>
      </div>
    </div>
  )
}

export default SumaryOrder
