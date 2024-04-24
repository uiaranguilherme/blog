import { IRoute } from "@infra"
import { createAboutMe } from "./about-me"

const index = "/"

const AllRoutes: Array<IRoute> = [
  {
    path: "/about-me",
    childs: [
      {
        type: "post",
        path: "/craete-about-me",
        route: createAboutMe,
      },
    ],
  },
]

export default AllRoutes
