import { IRoute } from "@infra"
import { createAboutMe, getAboutMe } from "./about-me"
import { createNewProject, deleteProjectPerId, getProjectPaginate } from "./projects"
import { getPostPerId, getPostPaginate, createNewPost, updatePostPerId, deletePostPerId } from "./posts"
import { createNewWorkHistory, deleteWorkHistoryPerId, getAllWorkHistory } from "./work-history"
import { createNewFile, getFilePerId } from "./files"
import storage from "@storage"

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
        path: "/paginate",
        route: getPostPaginate,
      },
      {
        type: "get",
        path: "/:id",
        route: getPostPerId,
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
    path: "/work-history",
    childs: [
      {
        type: "post",
        path: index,
        route: createNewWorkHistory,
      },
      {
        type: "get",
        path: index,
        route: getAllWorkHistory,
      },
      {
        type: "delete",
        path: "/:id",
        route: deleteWorkHistoryPerId,
      },
    ],
  },
  {
    path: "/storage",
    childs: [
      {
        type: "post",
        path: index,
        middleware: [storage.single("File")],
        route: createNewFile,
      },
      {
        type: "get",
        path: "/:id",
        route: getFilePerId,
      },
    ],
  },
]

export default AllRoutes
