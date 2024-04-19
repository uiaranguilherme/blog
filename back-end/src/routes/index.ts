import { middlewareToken } from "@security"
import { controllerDeleteProfile, controllerGetAllProfilesPerUser, controllerNewProfile } from "./profiles"
import { controllerRegisterUser, controllerLoginUser, controllerUpdatePassword, controllerUpdateProfile, controllerIsExistUser } from "./user"

import { IRoute } from "@infra"
import { controllerRefreshToken, controllerValidateToken } from "./token"

const index = "/"

const AllRoutes: Array<IRoute> = [
  {
    path: "/user",
    childs: [
      {
        path: index,
        type: "post",
        route: controllerRegisterUser,
      },
      {
        path: "/is-exist",
        type: "get",
        route: controllerIsExistUser,
      },
      {
        path: "/login",
        childs: [
          {
            path: index,
            type: "post",
            route: controllerLoginUser,
          },
        ],
      },
      {
        path: "/update",
        childs: [
          {
            path: "/password",
            type: "put",
            route: controllerUpdatePassword,
            middleware: [middlewareToken],
          },
          {
            path: "/profile",
            type: "put",
            route: controllerUpdateProfile,
            middleware: [middlewareToken],
          },
        ],
      },
    ],
  },
  {
    path: "/profiles",
    childs: [
      {
        path: "/:user",
        type: "get",
        route: controllerGetAllProfilesPerUser,
        middleware: [middlewareToken],
      },
      {
        path: index,
        type: "post",
        route: controllerNewProfile,
        middleware: [middlewareToken],
      },
      {
        path: "/delete-profile",
        type: "delete",
        route: controllerDeleteProfile,
        middleware: [middlewareToken],
      },
    ],
  },
  {
    path: "/security",
    childs: [
      {
        path: "/refresh-token",
        type: "post",
        route: controllerRefreshToken,
      },
      {
        path: "/validate-token",
        type: "post",
        route: controllerValidateToken,
      },
    ],
  },
]

export default AllRoutes
