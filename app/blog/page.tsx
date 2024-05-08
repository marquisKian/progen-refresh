import React from "react";
import MainSectionBlogs from "@/components/Blogs/MainSectionBlogs";
import TransitionComponent from "@/components/Global/TransitionComponent";
import NavbarGroup from "@/components/Global/NavbarGroup";
const page = () => {
  return (
    <main>
      <NavbarGroup/>
      <TransitionComponent />
      <MainSectionBlogs />
    </main>
  );
};

export default page;
