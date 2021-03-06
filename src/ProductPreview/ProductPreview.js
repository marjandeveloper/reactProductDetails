import React from 'react'; 

import { FaHeartbeat } from 'react-icons/fa'

/* import { Icon } from '@iconify/react';
import heartBreak from '@iconify-icons/mdi/heart-broken'; */

import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes(); 
    

    return (
        <div className={classes.ProdactPreview}>
            <img src={props.currentPeviewImage} alt="Product Preview" />     

            {
                props.currentSelectedFeature === 1 ? 
                <div className={classes.HeartBeatSection}>
                    <FaHeartbeat />
                    <p>78</p>    
                </div> : 
                <div className={classes.TimeSection}>
                    <p>{`${currentHour} : ${currentMinute}`}</p>
                </div>
            }
        
        </div>
    );
    
}

export default ProductPreview;