import { useFormik } from "formik";
import useRequest from "./use-request";

export default () => {
  const { Post, isLoading } = useRequest();

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      image: "",
      aboutMe: "",
    },
    onSubmit: async (values) => await Post("", values),
  });

  const handleSaveImage = async (e: any) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("imagem", image);

    const isSaveImage = await Post("", formData);

    if (isSaveImage.isSuccess && isSaveImage.value !== undefined) {
      setFieldValue("image", isSaveImage.value);
    }
  };

  return { values, handleChange, handleSubmit, handleSaveImage, isLoading };
};
