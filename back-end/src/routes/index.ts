import { IRoute } from "@infra"
import { createAboutMe, getAboutMe } from "./about-me"
import { createNewProject, deleteProjectPerId, getProjectPaginate } from "./projects"
import { getPostPerId, getPostPaginate, createNewPost, updatePostPerId, deletePostPerId } from "./posts"
import { createNewCompanyHistory } from "./company-history"

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
        path: index,
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
        path: index,
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
        path: index,
        route: createNewPost,
      },
      {
        type: "put",
        path: "/:id",
        route: updatePostPerId,
      },
      {
        type: "delete",
        path: "/:id",
        route: deletePostPerId,
      },
    ],
  },
  {
    path: "/company-history",
    childs: [
      {
        type: "post",
        path: index,
        route: createNewCompanyHistory,
      },
    ],
  },
]

export default AllRoutes
