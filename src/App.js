import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList.js';
import SearchForm from './components/SearchForm.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component={WelcomePage} />
        <Route path = "/characters" component={CharacterList} />
      </Switch>
      <main>
        <Header />
        <SearchForm />
        <CharacterList />
      </main>
    </div>
  );
}
