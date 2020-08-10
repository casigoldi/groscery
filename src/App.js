import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import CategoriesPage from "./pages/categories/categories.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/categories" component={CategoriesPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
