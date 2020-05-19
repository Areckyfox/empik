import React from 'react'
import './summaryOrder.css'
import { useTranslation } from 'react-i18next'

const SumaryOrder = ({ dataSummary }) => {
  const { t } = useTranslation()
  return (
    <div className='right-site span-1-of-3 display-inlineB'>
      <h2>{t('summary')}</h2>
      <div className='details'>
        <div className='details-block'>
          <span className='name'>{t('summaryProducts')}</span>
          <span className='value'>{`${dataSummary.summaryProducts} zł`}</span>
        </div>
        <div className='details-block'>
          <span className='name'>{t('vatValue')}</span>
          <span className='value'>{dataSummary.vatValue}</span>
        </div>
        <div className='details-block'>
          <span className='name'>{t('deliveryCost')}</span>
          <span className='value'>{`${dataSummary.deliveryCost} zł`}</span>
        </div>
      </div>
      <div className='summary'>
        <div className='summary-block'>
          <span className='name'>{t('sum')}</span>
          <span className='value'>{`${dataSummary.sum} zł`}</span>
        </div>
        <button className='disabled'>{t('next')}</button>
      </div>
    </div>
  )
}

export default SumaryOrder
