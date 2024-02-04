import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faComment,
  faHeart,
  faPoll,
  faRetweet,
  faShare
} from "@fortawesome/free-solid-svg-icons";
export const PostContainer = ({ image }) => {
  return (
    <>
      <div className="my-3 w-[98%] mx-auto bg-white   rounded-lg border border-gray-300 p-5 mb-5">
        {/* //postimageContent */}
        <div className="flex items-start">
          <div className="w-[40%] p-2 ">
            <img
              class="size-12 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Rounded avatar"
            ></img>
          </div>
          <div className="p-2">
            <h6 class="text-left mt-2 font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg font-mono dark:text-white">
              Sufyan ahmed
            </h6>
            <p class="mt-4 text-justify mb-3 text-gray-500 dark:text-gray-400">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
          </div>
        </div>
        <a href="#">
          <img
            className="rounded-t-lg"
            src={
              image ||
              "https://w0.peakpx.com/wallpaper/545/562/HD-wallpaper-coding-minimalist-r-minimalist-programmer.jpg"
            }
          />
        </a>

        <div className="flex justify-between px-5 py-3">
          <div className="space-x-2">
            <FontAwesomeIcon icon={faComment} />
            10
          </div>
          <div className="space-x-2">
            <FontAwesomeIcon icon={faRetweet} />
            20
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            30
          </div>
          <div>
            <FontAwesomeIcon icon={faPoll} />
            50
          </div>
          <div>
            <FontAwesomeIcon icon={faShare} />
            40</div>
        </div>
      </div>
    </>
  );
};
