import React from "react";
import { TrendingItem } from "./TrendingItem.jsx";

export const Trending = ({className}) => {
  let post = [
    { post: 1234, trend: "#SanamJaved" },
    { post: 2000, trend: "#Balochistan" },
    { post: 1232, trend: "خان_کی_کال_پر_لبیک#" },
    { post: 4321, trend: "#Imran khan" },
    { post: 1232, trend: "##QatilQatilDrAsimQatil" },
    { post: 2234, trend: "#PTI" },
    { post: 1020, trend: "General Election" },
    { post: 1552, trend: "بیغیرت_عمران_خان#" },
    { post: 1232, trend: "##QatilQatilDrAsimQatil" },
    { post: 1542, trend: "#AusVSWi" },
    { post: 1552, trend: "#RahatFatahAliKhan" },
    { post: 1652, trend: "#Imran khan" },
    { post: 1272, trend: "#ShamarJoseph" },
  ];

  return (
    <div className={`p-2`}>
      <div className={` ${className || "max-w-sm"} p-6 bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
        <a href="#">
          <h5 class="font-sans ml-4 mb-2 text-xl font-bold tracking-wider text-gray-900 dark:text-white">
            Trends for you
          </h5>
        </a>
        <div className=" p-6 rounded-[15px] ">
          {post.map((post, index) => {
            return <TrendingItem key={index} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};
