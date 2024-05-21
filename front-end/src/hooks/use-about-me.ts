import { useFormik } from "formik";
import { saveImageInStorage, saveAboutMe, getAboutMe } from "../services";
import { ChangeEvent } from "react";
import useRequest from "./use-request";

export default () => {
  const { data, isLoading } = useRequest({
    defaultValues: {
      aboutMe: "",
      image: "",
    },
    request: getAboutMe,
  });

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: data,
    enableReinitialize: true,
    onSubmit: async (values) =>
      await saveAboutMe({
        birth: new Date("04/12/1995"),
        history: values.aboutMe,
        hometown: "Itajai-SC",
        name: "Uiaran Guilherme Campos de Lima",
        img: values.image,
      }),
  });

  const handleSaveImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files !== null ? e.target.files[0] : null;

    if (image === null) return;

    const file = await saveImageInStorage(image);

    if (file !== undefined) {
      setFieldValue("image", file.path);
    }
  };

  return { values, handleChange, handleSubmit, handleSaveImage };
};
