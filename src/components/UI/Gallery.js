import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Posts";

function Gallery() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Posts}/>
        <Route path="/:categoryId" component={Posts}/>
      </Switch>
    </div>
  );
}

export default Gallery;
