import React from "react";
import { Premium } from "./Premium";
import { Container } from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faPodcast, faShare } from "@fortawesome/free-solid-svg-icons";

export const Post = ({image}) => {
  return (
    <Container className="mt-2 flex space-x-5 border border-gray-300 rounded-[10px] p-4">
      <div>
        <img
          className="w-9 h-9 rounded-[50%]"
          src={image}
          alt="Rounded avatar"
        />
      </div>
      <div className="w-[90%]">
        <div className="space-x-1 font-sans font-light ">
          <span className="font-bold ">PTI</span>
            <span>
            <Premium/>
            </span>
          <span>@PTIofficial</span>
          <span>3h</span>
        </div>
        <div className="content mt-4">
          چئیرمین پاکستان تحریک انصاف بیرسٹر گوہر علی خان کی اڈیالہ جیل کے باہر
          میڈیا سے گفتگو۔
        </div>
        <div className="mt-4 ">
          <img
            className="h-96 w-full rounded-lg"
            src={image}
            alt="image description"
          />
        </div>
        <div className="like flex justify-around mt-5">
          <div className="px-4">
           <FontAwesomeIcon icon={faComment} />
            123
          </div>
          <div>
            <FontAwesomeIcon icon={faPodcast} />
            3.4k</div>
          <div>
          <FontAwesomeIcon icon={faHeart} />
            8.9k</div>
          <div>
          <FontAwesomeIcon icon={faShare} />
            share</div>
        </div>
      </div>
    </Container>
  );
};
