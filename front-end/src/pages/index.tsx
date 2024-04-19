/** @format */

import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { Newsletters, PostPerName } from "./(blog)";
import { Board, Login, Presentation } from "./(dashboard)";

const ContactUs = lazy(() => import("./contact-us"));
const Projects = lazy(() => import("./projects"));
const AboutMe = lazy(() => import("./about-me"));
const Home = lazy(() => import("./home"));

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout variant="main" />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/about-me",
    element: <Layout variant="main" />,
    children: [
      {
        path: "",
        element: <AboutMe />,
      },
    ],
  },
  {
    path: "/projects",
    element: <Layout variant="main" />,
    children: [
      {
        path: "",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/contact-us",
    element: <Layout variant="main" />,
    children: [
      {
        path: "",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/blog",
    element: <Layout variant="main" />,
    children: [
      {
        path: "",
        element: <Newsletters />,
      },
      {
        path: ":post",
        element: <PostPerName />,
      },
    ],
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "",
        element: <Layout variant="dashboard" />,
        children: [
          {
            path: "",
            element: <Board/>
          },
          {
            path: "presentation",
            element: <Presentation/>
          }
        ]
      }
    ],
  },
]);
