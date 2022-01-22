import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "./store/services/categories";
import Gallery from "./components/UI/Gallery";
import SideBar from "./components/Layout/SideBar";
import classes from "./App.module.css";

function App() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Fragment>
      <div className={classes.App}>
        <SideBar categoriesMenu={categories} />
        <Gallery />
      </div>
    </Fragment>
  );
}

export default App;
