import cart from '../images/icon-cart.svg'
import './App.sass'
const App = () => {
  return (
    <div className="app">
      <div className="image"></div>
      <div className="descripton">
        <h3 className="subtitle">PERFUME</h3>
        <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
        <p className="paragraph">A floral, solar and voluptuous 
          interpretation composed by Olivier Polge, Perfumer-Creator 
          for the House of CHANEL.
        </p>
        <div className="price-container">
          <h2 className="price">$149.99</h2>
          <span className="old-price">$169.99</span>
        </div>
        <button className="cart">
          <img className='cart-ico' src={cart} alt="cart"/>
          <span className='btn-text'>Add to Cart</span></button>
      </div>
    </div>
  );
}

export default App;
