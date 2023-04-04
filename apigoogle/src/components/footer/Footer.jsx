import React from 'react'

import './footer.css'

const Footer = () => (
  <div className="footer">
    <p className="footer-copyright">
      &copy; sample Inc. {new Date().getFullYear()}
    </p>
  </div>
)

export default Footer
