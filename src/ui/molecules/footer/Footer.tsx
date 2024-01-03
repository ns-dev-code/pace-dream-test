import React from 'react';
import {Box} from '@mui/material'

const Footer = () => {
  return (
    <Box className="container footer_wrapper">
      <Box className="row container-footer mb-4 ">
        <Box className="col-md-2">
          <Box className="row">
            <ul>
              <span> Products</span>
              <li>Features</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </Box>
        </Box>

        <Box className="col-md-2">
          <Box className="row">
            <ul>
            <span>Products</span>
              <li>Features</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </Box>
        </Box>

        <Box className="col-md-2">
          <Box className="row">
            <ul>
            <span>Resources</span>
              <li>Partners</li>
              <li>Developers</li>
              <li>Community</li>
              <li>Apps</li>
            </ul>
          </Box>
        </Box>

        <Box className="col-md-4">
          <Box className="row">
            <ul>
            <span>Company</span>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </Box>
        </Box>

        <Box className="col-md-2">
          <Box className="row">
            <ul>
             <span> Mobile app</span>
              <li><img src="https://nitinns.sirv.com/Images/9f0c85a5e33adb783fa0aef667075f9e1556003622.webp" width="120" height="100%" alt="" /></li>
              <li><img src="https://nitinns.sirv.com/Images/23e930757c3df49840c482a8638bf5c31556001144.webp" width="130" height="100%" alt="" /></li>
            </ul>
          </Box>
        </Box>
      </Box>

      <Box className="rights">
        <Box className="row d-flex align-items-center">
          <Box className="col-md-4">
             <img width="200px" height="100%" src="https://nitinns.sirv.com/Images/Screenshot%202024-01-04%20at%203.24.36%E2%80%AFAM.png" />
          </Box>

          <Box className="col-md-4">
            <Box className="row">
              <p className="mb-0">&copy;	2023 PaceDream. All Rights Reserved. </p>
            </Box>
          </Box>

          <Box className="col-md-4">
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
