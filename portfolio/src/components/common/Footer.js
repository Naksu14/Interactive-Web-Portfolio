import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

function Footer({darkMode}) {
    const buttonStyles = {
        backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(109, 109, 109, 0.1)',
        '&:hover': { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.3)', transform: 'scale(1.1)' },
        borderRadius: '50%',
        width: 56,
        height: 56,
        transition: 'all 0.3s ease'
      };

    const icondarkmode = {
        color: darkMode ? '#ffffff' : '#59453F', fontSize: '2rem'
      };

  return (
    <footer className={`mt-10 py-6 text-left ${darkMode ? "text-white" : "text-[#59453F]"}`}>
          <div className="w-[80%] mx-auto flex justify-between items-center mb-6">

          </div>


          {/* Border and social icons */}
          <div
            className={`w-[90%] mx-auto border-t-[2px] ${darkMode ? "border-white" : "border-[#59453F]"} mt-20`} />


          <div className="w-[80%] mx-auto flex flex-col sm:flex-row sm:justify-between items-center mt-4 gap-4 sm:gap-0 text-center sm:text-left">
            <p className="text-sm order-2 sm:order-1">
              &copy; {new Date().getFullYear()} INNOVATE, All rights reserved.
            </p>

            <div className="flex gap-7 order-1 sm:order-2">
              <Tooltip title="View Github">
                <IconButton
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={buttonStyles}
                >
                  <GitHubIcon sx={icondarkmode} />
                </IconButton>
              </Tooltip>

              <Tooltip title="View Facebook">
                <IconButton
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={buttonStyles}
                >
                  <FacebookIcon sx={icondarkmode} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Contact on Email">
                <IconButton
                  href="mailto:example@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={buttonStyles}
                >
                  <EmailIcon sx={icondarkmode} />
                </IconButton>
              </Tooltip>
            </div>
          </div>

        </footer>
  )
}

export default Footer
