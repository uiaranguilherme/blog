import blog from "./index";
import { IAboutMe } from "./interfaces/iabout-me";

export default async (aboutMe: IAboutMe) => {
  await blog.Post("/about-me", JSON.stringify(aboutMe), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
