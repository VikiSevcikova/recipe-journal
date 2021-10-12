import React from 'react';
import './App.css';
import Main from './pages/Main';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeDetailPage from './pages/RecipeDetailPage';
import RecipeEditPage from './pages/RecipeEditPage';

const App: React.FC = () => {
  return (
    <>
      <div className="bg"></div>
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/recipe/:id" component={RecipeDetailPage} />
        <Route path="/edit/:id" component={RecipeEditPage} />
      </Router>
    </>
  );
}

export default App;
