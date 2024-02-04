import {
  faCalendarCheck,
  faGift,
  faGlobe,
  faImage,
  faLocation,
  faLocationDot,
  faMap,
  faPoll,
  faPollH,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import Input from "./Input";
import { Button } from "./Button";

export const CreatePost = () => {
  const ref = useRef(null);
  const btnRef = useRef(null);
  const handlesubmit = () => {
    const value = ref.current.value;
    if (!value) return ref.current.focus();
    console.log(ref.current.value);
  };
  return (
    <div className="md:w-full flex w-full p-4 gap-2 border border-gray-300 rounded-xl">
      <div>
        <img
          className="size-12 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Rounded avatar"
        ></img>
      </div>
      <div className="w-full">
        <div>
          <Input
            type="search"
            id="default-search"
            className="block w-full mb-2 p-4 text-xl text-gray-900 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What is happening?!"
            required
            ref={ref}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex justify-around w-[40%] items-center text-blue-400">
            <div>
              <FontAwesomeIcon icon={faImage} />
            </div>
            <div>
              <FontAwesomeIcon icon={faGift} />
            </div>
            <div>
              <FontAwesomeIcon icon={faPoll} />
            </div>
            <div>
              <FontAwesomeIcon icon={faSmile} />
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
          </div>
          <div className="w-[50%] flex justify-end">
            <Button
              type="Submit"
              ref={btnRef}
              onClick={handlesubmit}
              className="bg-blue-500 text-white rounded-[30px] px-6 py-2"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
