import React, {Component} from 'react';
import classes from './App.module.css';

import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    ProductData: ProductData,
    
    currentPeviewImagePos: 0,
    currentSelectedFeature: 0
  }

  onColorOptionClick = (pos) => {
    this.setState({ currentPeviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos})
  }

  render(){

    return (
      

      <div className="App">
        
        <Topbar />
  
        <main className={classes.MainContainer}>
          <ProductPreview currentPeviewImage={this.state.ProductData.colorOptions[this.state.currentPeviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature}  />
  
          <ProductDetails data={ProductData} onColorOptionClick={this.onColorOptionClick} currentPeviewImagePos={this.state.currentPeviewImagePos} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature} />
        </main>
      </div>
    );  
  }
}

export default App;
