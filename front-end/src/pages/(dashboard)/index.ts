import { lazy } from "react";

const Login = lazy(() => import("./login"));
const Board = lazy(() => import("./board"));
const Presentation = lazy(() => import("./presentation"));
const Posts = lazy(() => import("./posts"));
const Projects = lazy(() => import("./presentation"));

export { Login, Board, Presentation, Posts };
