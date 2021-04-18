import React, {Component} from 'react';
import classes from './App.module.css';

import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    ProductData: ProductData,
    currentPeviewImage: "https://imgur.com/iOeUBV7.png",
    showHeartBeatSection: true
  }

  render(){
    return (
      <div className="App">
        
        <Topbar />
  
        <main className={classes.MainContainer}>
          <ProductPreview currentPeviewImage={this.state.currentPeviewImage} showHeartBeatSection={this.state.showHeartBeatSection} />
  
          <ProductDetails data={ProductData} />
        </main>
      </div>
    );  
  }
}

export default App;
