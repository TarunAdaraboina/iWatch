import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <img src="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?202305240102" alt="Apple Logo" />
        <ul>
          <li><a href="#">Mac</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">iPhone</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">TV</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
