import React from 'react'
import PricingPlans from '../../components/PricingPlans/PricingPlans'
import PricingBoxes from '../../components/PricingBoxes/PricingBoxes'
import PricesFeatures from '../../components/PricesFeatures/PricesFeatures'

const Pricing = () => {
  return (
    <div>
      <PricingPlans/>
      <PricingBoxes/>
      <PricesFeatures/>
    </div>
  )
}

export default Pricing