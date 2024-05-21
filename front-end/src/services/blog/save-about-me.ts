import blog from "./index";
interface ISaveAboutMe {
  name: string;
  history: string;
  birth: Date;
  hometown: string;
  img: string;
}

export default async (aboutMe: ISaveAboutMe) => {
  await blog.Post("/about-me", JSON.stringify(aboutMe), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
