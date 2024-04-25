import { IRoute } from "@infra"
import { createAboutMe, getAboutMe } from "./about-me"
import { createNewProject } from "./projects"

const index = "/"

const AllRoutes: Array<IRoute> = [
  {
    path: "/about-me",
    childs: [
      {
        type: "get",
        path: index,
        route: getAboutMe,
      },
      {
        type: "post",
        path: "/craete-about-me",
        route: createAboutMe,
      },
    ],
  },
  {
    path: "/projects",
    childs: [
      {
        type: "post",
        path: "/create-project",
        route: createNewProject,
      },
    ],
  },
]

export default AllRoutes
