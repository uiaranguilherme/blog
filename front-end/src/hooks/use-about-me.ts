import { useFormik } from "formik";
import { saveAboutMe, getAboutMe } from "../services";
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

  return { values, setFieldValue, handleChange, handleSubmit };
};
