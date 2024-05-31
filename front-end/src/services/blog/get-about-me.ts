import { IRequest } from "../../handlers/request";
import blog from "./index";
import { IAboutMe } from "./interfaces/iabout-me";

export default async () => {
  const aboutMe = (await blog.Get("/about-me")) as IRequest<IAboutMe>;

  if (aboutMe.isSuccess && aboutMe.value !== undefined) {
    return {
      aboutMe: aboutMe.value.history,
      image: aboutMe.value.img,
    };
  }

  return {
    aboutMe: "",
    image: "",
  };
};
