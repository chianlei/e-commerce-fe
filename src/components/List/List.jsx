import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import { data } from "../../constants/data";

const List = ({ subCats, maxPrice, sort, categoryId }) => {
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
