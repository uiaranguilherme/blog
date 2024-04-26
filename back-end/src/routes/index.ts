import { IRoute } from "@infra"
import { createAboutMe, getAboutMe } from "./about-me"
import { createNewProject, deleteProjectPerId, getProjectPaginate } from "./projects"

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
        path: "/create/about-me",
        route: createAboutMe,
      },
    ],
  },
  {
    path: "/projects",
    childs: [
      {
        type: "get",
        path: "/paginate",
        route: getProjectPaginate,
      },
      {
        type: "post",
        path: "/create/project",
        route: createNewProject,
      },
      {
        type: "delete",
        path: "/delete/:id",
        route: deleteProjectPerId,
      },
    ],
  },
]

export default AllRoutes
