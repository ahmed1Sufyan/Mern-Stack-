import React from "react";
import { Container } from "./Container";
import { CreatePost } from "./CreatePost";
import { RightSection } from "./RightSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCalendar,
  faCalendarDay,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { NavLink, Outlet } from "react-router-dom";
import { Spinner } from "./Spinner";

export const Profile = () => {
  const profileMenu = [
    {
      to: "/home",
      title: "Posts",
    },
    {
      to: "/profile/card",
      title: "Replies",
    },
    {
      to: "/",
      title: "Highlights",
    },
    {
      to: "/",
      title: "Media",
    },
    {
      to: "/profile/post",
      title: "Likes",
    },
  ];
  return (
    <Container className="border border-gray-200 flex">
      <section className="w-full" >
        <div className="upper flex gap-5 mb-2">
          <div className="w-[10%] flex justify-center items-center">
            <FontAwesomeIcon className="size-6" icon={faArrowAltCircleLeft} />
          </div>
          <div className="w-[90%] p-2">
            <h1 className="font-bold font-custFont">Sufyan Ahmed Ansare</h1>
            <p>0 Posts</p>
          </div>
        </div>
        <div>
          {false ? (
            <Spinner />
          ) : (
            <img
              className="h-[13rem] max-h-[13rem] bg-object-fit-cover bg-center bg-cover w-full max-w-full"
              src={
                "https://i.pinimg.com/originals/c1/5f/d1/c15fd13180df7eaa55aaa6960e7cc090.jpg" ||
                "https://flowbite.com/docs/images/examples/image-1@2x.jpg"
              }
              alt="image description"
            />
          )}
        </div>
        <section className="userdetails">
          <div className="Avatar relative">
            <img
              class="absolute -top-20 left-5 rounded-full w-36 h-36"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Extra large avatar"
            />
          </div>
          <div className="Edit flex justify-end ">
            <button className="w-32 h-10 rounded-[30px] border border-gray-500 font-bold font-sans mt-2">
              Edit Profile
            </button>
          </div>
          <div className="Details mt-8 pl-4 mb-3 font-CustFont1">
            <h1 className="font-bold text-lg">Sufyan Ahmed Ansare</h1>
            <p className="text-sm text-gray-500 mb-2">@AhmedAnsar98775</p>
            <p className="text-gray-500 flex gap-2 items-center mb-1 ">
              <FontAwesomeIcon className="size-4" icon={faCalendarWeek} />
              Joined January 2024
            </p>
            <div className="flex text-md space-x-4 text-gray-500">
              <h1>
                4<span className="ml-1">Following</span>
              </h1>
              <h1>
                0<span className="ml-1">Follower</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="profileMenu">
          <div className="container bg-gray-200  flex h-16 justify-between items-center p-4 font-semibold font-custFont">
            {profileMenu.map((item) => {
              return (
                <div className="h-full">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive ? "text-cyan-500" : "text-black"
                    }
                  >
                    {item.title}
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div>
            <Outlet />
          </div>
        </section>
      </section>
    </Container>
  );
};
