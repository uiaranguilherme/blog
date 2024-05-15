import { Post } from "../../handlers/request";

export default async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const isSuccessSaveFile = await Post("", formData);

  return isSuccessSaveFile.value;
};
