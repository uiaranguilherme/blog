/** @format */

import { lazy } from "react";

const Newsletters = lazy(() => import("./newsletters"));
const PostPerName = lazy(() => import("./[post-name]"));

export { Newsletters, PostPerName };
