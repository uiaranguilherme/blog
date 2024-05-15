import { useFormik } from "formik";
import { saveImageInStorage, saveAboutMe } from "../services";

interface FileInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
  files: FileList | null;
}

export default () => {
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      image: "",
      aboutMe: "",
    },
    onSubmit: async (values) =>
      await saveAboutMe({
        birth: new Date(),
        history: values.aboutMe,
        hometown: "",
        name: "Uiaran Guilherme Campos de Lima",
      }),
  });

  const handleSaveImage = async (e: FileInputEvent) => {
    const image = e.target.files !== null ? e.target.files[0] : null;

    if (image === null) return;

    const idImage = await saveImageInStorage(image);

    if (idImage !== undefined) {
      setFieldValue("image", idImage);
    }
  };

  return { values, handleChange, handleSubmit, handleSaveImage };
};
