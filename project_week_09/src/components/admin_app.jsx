// LoginApp.jsx
import React, { useState } from 'react';
import './admin_app.css';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Redux slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setUserInfo: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

const { login, logout, setUserInfo } = authSlice.actions;

// UI Component
const LoginApp = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector(state => state.auth);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ name: username }));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <div className="login-form">
          <h2>Đăng nhập</h2>
          <input
            type="text"
            placeholder="Nhập tên của bạn..."
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      ) : (
        <div className="welcome">
          <h2>Xin chào, {user.name} 👋</h2>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      )}
    </div>
  );
};

// App wrapper
const App = () => (
  <Provider store={store}>
    <LoginApp />
  </Provider>
);

export default App;
