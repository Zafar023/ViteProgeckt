// App.tsx

import React from 'react';
import './App.css'; // Импорт стилей приложения
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;


