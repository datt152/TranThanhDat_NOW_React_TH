// ShoppingCart.jsx
import React from 'react';
import './shopping_cart.css';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Redux Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

const { addItem, removeItem, updateQuantity } = cartSlice.actions;

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const products = [
    { id: 1, name: 'Apple 🍎', price: 2 },
    { id: 2, name: 'Banana 🍌', price: 1 },
    { id: 3, name: 'Orange 🍊', price: 3 },
  ];

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>

      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => dispatch(addItem(product))}>Add</button>
          </div>
        ))}
      </div>

      <h3>Cart Items</h3>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map(item => (
            <li className="cart-item" key={item.id}>
              <span>{item.name}</span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={e =>
                  dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                }
              />
              <span>${item.price * item.quantity}</span>
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <div className="totals">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

// App wrapper
const App = () => (
  <Provider store={store}>
    <ShoppingCart />
  </Provider>
);

export default App;
