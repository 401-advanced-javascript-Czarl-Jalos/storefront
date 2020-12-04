import React from 'react';

import Header from '../src/components/header/header.js';
import Footer from '../src/components/footer/footer.js';
import Categories from '../src/components/storefront/categories.js';
import ActiveCategory from '../src/components/storefront/current-category.js';
import Products from '../src/components/storefront/product.js';
import SimpleCart from '../src/components/cart/simplecart.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <SimpleCart />
      <ActiveCategory />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
