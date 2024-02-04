import { useState,useEffect } from "react";
import { LSideMenu } from "./components/LSideMenu";
import { Posrcreate } from "./components/Posrcreate";
import { Feed } from "./components/Feed";
import { Trending } from "./components/Trending";
import { Postskeleton } from "./components/postskeleton";
import { Inputfield } from "./components/Inputfield";
import { Post } from "./components/Post";
import { CreatePost } from "./components/CreatePost";
import { Icon } from "./components/Icon";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Allpost } from "./components/Allpost";
import { LeftSection } from "./components/LeftMenu";
import { MiddleSection } from "./components/MiddleSection";
import { RightSection } from "./components/RightSection";
import { Outlet, useNavigate } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";
import { Layout } from "./components/Layout";

function App() {
  const [set, setstate] = useState(false);
  const navigate = useNavigate()
  useEffect(() =>{
    if(set)
    navigate("/signup")
  },
  [])
  return (
    <>
     <Layout/>
    </>
  );
}

export default App;
