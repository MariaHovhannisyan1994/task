import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Posts";

function Gallery() {
  return (
    <div>
      <Switch>
        <Route path="/:categoryId" component={Posts}></Route>
      </Switch>
    </div>
  );
}

export default Gallery;
