import { IRoute } from "@infra"
import { createAboutMe, getAboutMe } from "./about-me"
import { createNewProject, deleteProjectPerId, getProjectPaginate } from "./projects"
import { createNewPost, getPostPaginate, getPostPerId, updatePostPerId } from "./posts"

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
        path: "/:id",
        route: deleteProjectPerId,
      },
    ],
  },
  {
    path: "/posts",
    childs: [
      {
        type: "get",
        path: "/:id",
        route: getPostPerId,
      },
      {
        type: "get",
        path: "/paginate",
        route: getPostPaginate,
      },
      {
        type: "post",
        path: "/create/post",
        route: createNewPost,
      },
      {
        type: "put",
        path: "/update/post",
        route: updatePostPerId,
      },
    ],
  },
]

export default AllRoutes
