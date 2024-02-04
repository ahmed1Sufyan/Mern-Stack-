import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faHashtag,
  faBell,
  faMagnifyingGlass,
  faMessage,
  faBookmark,
  faList,
  faUser,
  faUsers,
  faX,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
export const LSideMenu = () => {
  const Content_Icon = [
    {
      Content: "Home",
      Icon: faHashtag,
      location : "/home"
    },
    {
      Content: "Explore",
      Icon: faMagnifyingGlass,
      location : "/explore"
     
    },
    {
      Content: "Notifications",
      Icon: faBell,
    },
    {
      Content: "Messages",
      Icon: faMessage,
    },
    {
      Content: "Bookmarks",
      Icon: faBookmark,
    },
    {
      Content: "Lists",
      Icon: faList,
    },
    {
      Content: "Profile",
      Icon: faUser,
      location : "/profile"
    },
    {
      Content: "Communities",
      Icon: faUsers,
    },
    {
      Content: "Premium",
      Icon: faX,
    },
    {
      Content: "Log out",
      Icon: faEllipsis,
      location : "/signup"
    },
  ];
 
  return  Content_Icon.map((item, idx) => {
    return (
      <NavLink to={item?.location}  className={"bg-black"}>
      <div
        key={idx}
        className=" w-auto hover:bg-slate-300  cursor-pointer px-3 text-black py-3 rounded-[30px] font-sans flex  items-center gap-5"
      >
        <FontAwesomeIcon className="size-6" icon={item.Icon} />
        <div className="text-xl ">{item.Content}</div>
      </div>
      </NavLink>
    );
  });
};
