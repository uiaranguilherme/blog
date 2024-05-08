/** @format */

import { lazy } from "react";
import { Footer } from "./layout/main";
import Loading from "./loading";

const Layout = lazy(() => import("./layout"));
const Filter = lazy(() => import("./filter"));
const When = lazy(() => import("./when"));
const Card = lazy(() => import("./card"));
const Carousel = lazy(() => import("./carousel"));
const CarouselItem = lazy(() => import("./carousel/carousel-item"));
const Markdown = lazy(() => import("./mk"));
const RichTextMarkdown = lazy(() => import("./rich-text-markdown"));

export {
  Layout,
  Footer,
  Filter,
  When,
  Card,
  Loading,
  Carousel,
  CarouselItem,
  Markdown,
  RichTextMarkdown,
};
