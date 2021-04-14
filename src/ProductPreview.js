import React from 'react'; 

const ProductPreview = (props) => {
    <div>
        <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />

        {/* <div className={classes.TimeSection}>
        <p>{`${currentHour} : ${currentMinute}`}</p>
        </div> */}

        <div className={classes.HeartBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
        </div>
    </div>
}

export default ProductPreview;