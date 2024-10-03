import Headersection from '../components/Headersection'
import CategoriesSection from '../components/CategoriesSection'
import Featuredsection from '../components/Featuredsection'
import BestSellers from '../components/BestSellers'
import Travelsection from '../components/Travelsection'
import Deliversection from '../components/Deliversection'
import Groupsection from '../components/Groupsection'
import Contactsection from '../components/Contactsection'

import React, { useEffect, useState } from 'react'

const Home = () => {
  
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Headersection />
        <CategoriesSection />
        <Featuredsection />
        <BestSellers />
        <Travelsection />
        <Deliversection />
      </div>
      <Groupsection />
      <Contactsection />
    </div>
  )
}

export default Home
