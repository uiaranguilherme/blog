import blog from "./index";
import { IFileStorage } from "./interfaces/ifile-storage";

export default async (file: File): Promise<IFileStorage> => {
  const formData = new FormData();
  formData.append("File", file);
  console.log("File", file);

  const isSuccessSaveFile = await blog.Post("/storage", formData);

  return isSuccessSaveFile.value;
};
