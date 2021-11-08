import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import IconButton from '@mui/material/IconButton';
import  "../css/ScrollTop.css"
import React, { useEffect, useState } from "react";


const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    const buttonVisible = () => {
        if (window.pageYOffset > 100){
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };
    
      useEffect(() => {
        window.addEventListener("scroll", buttonVisible);
      }, []);

    return (
        <div className="TopIcon">
            { visible && 
                <IconButton className="scrollTop" onClick={scrollToTop} color="primary" size="large">
                    <ArrowCircleUpIcon sx={{fontSize: 40}}/>
                </IconButton>
            }
        </div>
    )
}

export default ScrollToTop;
