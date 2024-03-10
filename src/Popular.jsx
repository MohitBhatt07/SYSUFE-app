import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Popular({ onChildValue, isFavourite }) {
  //almost whole component is changed

  let usersFavList = {};
  if (isFavourite)
    usersFavList = JSON.parse(localStorage.getItem("userPreference")) || {};
  const favList = Object.keys(usersFavList).filter((key) => usersFavList[key]);

  function ListItem({ value }) {
    const handleClick = () => {
      onChildValue(value);
    };

    return (
      
        <li onClick={handleClick}>{value}</li>
      
    );
  }

  let popularList = [
    "ENGINEERING DAYS",
    "BANGALORE STORIES",
    "GOA DIARIES",
    "NITK STUFFS",
    "IIM THINGS",
    "IIMB FACTS",
    "SHAYARI",
    "VIKAS MEENA",
  ];
  //made unique set to avoid duplicate values because one can be both popular and favourite
  const uniqueSet = new Set([...favList, ...popularList]);
  const totalList = Array.from(uniqueSet);
  return (
    <div className="popular">
      <h1>What’s {isFavourite ? "favourite" : "popular"} right now?</h1>

      <div className="list">
        <ul className="list-items">
          {totalList.map((ele, index) => {
            if (index < 10) return <ListItem key={index} value={ele} />;
          })}
        </ul>
      </div>
    </div>
  );
}
