import React from "react";

export const TrendingItem = ({ post }) => {
  return (
    <div className="mb-2">
      <p className="font-custFont text-sm text-gray-500">
        Trending in Pakistan
      </p>
      <p className="text-md font-bold font-custFont cursor-pointer hover:underline">
        {post.trend}
      </p>
      <p className="font-custFont text-sm text-gray-500">
        <span className="text-[14px] mr-1">{post.post}</span>
        Posts
      </p>
    </div>
  );
};
