
import classes from './App.module.css';

function App() {
    const ProductData = {
      title: 'FitBit 19 - The Smartest Watch',
      description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
      colorOptions: [
          {
              styleName: 'Black Strap',
              imageUrl: 'https://imgur.com/iOeUBV7.png'
          },
          {
              styleName: 'Red Strap',
              imageUrl: 'https://imgur.com/PTgQlim.png'
          },
          {
              styleName: 'Blue Strap',
              imageUrl: 'https://imgur.com/Mplj1YR.png'
          },
          {
              styleName: 'Purple Strap',
              imageUrl: 'https://imgur.com/xSIK4M8.png'
          },
      ],
      featureList: [
          "Time", "Heart Rate"
      ]
  }
  const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_rUnpfRUGarWy2oKcot0JIxW2twM3pIDXTvoIxKCQGaH35ztMPIQABvZkiH0P4h6zUE&usqp=CAU" alt="Amayon Logo" />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProdactPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />

          {/* <div className={classes.TimeSection}>
            <p>{`${currentHour} : ${currentMinute}`}</p>
          </div> */}

          <div className={classes.HeartBeatSection}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div>
        </div>

        <div className={classes.ProductDate}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDescription}>{ProductData.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Colored Watch" />
            <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Colored Watch" />
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>

          <button className={classes.PrimaryButton}>Buy Now</button>
       </div>
      </div>
    </div>
  );
}

export default App;
