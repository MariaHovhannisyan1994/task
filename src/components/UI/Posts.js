import React, { useEffect, useState } from "react";
import classes from "./Posts.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/services/items";
import Button from "./Button";

const Posts = () => {
  const [page, setPage] = useState(1);
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  

  useEffect(() => {
    dispatch(
      fetchItems({
        params: { category_ids: categoryId, limit: 10, page, order: "desc" },
      })
    );
  }, [dispatch, categoryId, page]);

  const handleShowMorePosts = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setPage(1);
  }, [categoryId]);

  return (
    <div className={classes.container}>
      <div className={classes.pictures}>
        {items?.map((item) => (
          <div className={classes.wrapper} key={item.id}>
            <img src={item.url} alt={item.title} />
          </div>
        ))}
      </div>
      <div>
        <Button handleShowMorePosts={handleShowMorePosts} />
      </div>
    </div>
  );
};
export default Posts;
