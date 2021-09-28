import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'
function Footer() {
    return (
        <div className="footer">
          <div className="footer-icons"> <FacebookIcon/> <TwitterIcon/><InstagramIcon/> </div> 
        </div>
    )
}

export default Footer
