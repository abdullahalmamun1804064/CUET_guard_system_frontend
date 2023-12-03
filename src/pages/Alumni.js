import React from 'react'
import AlumniComponent from '../components/alumni/AlumniComponent'
import HeaderOne from '../common/header/HeaderOne'
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterTwo from '../common/footer/FooterTwo'

const Alumni = () => {
  return (
    <div>
      <HeaderOne />
      <Breadcrumb heading="Alumni" currentPage="Alumni" />
     
           <AlumniComponent/>


      <FooterTwo />
    
    </div>
  )
}

export default Alumni