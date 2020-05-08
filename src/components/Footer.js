import React from 'react'
import '../styles/styles.css'

const Footer = () =>{
  return(
    <div className="footer">
    ©2013-2016 BeMo Academic Consulting Inc. All rights reserved.
    <a href="http://www.cdainterview.com/disclaimer-privacy-policy.html">
    <span style={{textDecoration: "underline", color: "orangered"}}>   Disclaimer &amp; Privacy Policy</span></a>
    <a href="mailto:info@bemoacademicconsulting.com"><span style={{textDecoration: "underline", color: "orangered", background:"transparent"}}>  Contact Us</span></a>
    </div>
  )
}

export default Footer