import { Routes, Route, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Products } from '../pages/Products/Products';
import { NotFound } from '../pages/NotFound/NotFound';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';
import { SignIn } from '../pages/SingIn';
import { Profile } from '../pages/Profile';
import css from './App.module.css';
import { useEffect } from 'react';

console.log('hello');

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={buildLinkClass}>
            Products
          </NavLink>
          <NavLink to="/sign-in" className={buildLinkClass}>
            Sign In
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId/:name" element={<ProductDetails />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
