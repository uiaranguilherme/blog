import { ChangeEvent } from "react";
import { saveImageInStorage } from "../services";

export default (onSaveImage: (value: string) => void) => {
  const handleSaveImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files !== null ? e.target.files[0] : null;

    if (image === null) return;

    const file = await saveImageInStorage(image);

    if (file !== undefined) {
      onSaveImage(file.path);
    }
  };

  return { handleSaveImage };
};
