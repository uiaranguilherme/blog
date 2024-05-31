import blog from ".";
import IWorkHistory from "./interfaces/iwork-history";

export default async (work: IWorkHistory) => {
  return await blog.Post("/work-history", JSON.stringify(work), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
