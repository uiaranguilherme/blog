import { useState } from "react";
import IJobHistory from "./interfaces/ijob-history";
import saveNewWorkHistory from "../services/blog/save-new-work-history";
import useRequest from "./use-request";
import getWorkList from "../services/blog/get-work-list";

interface IJobList {
  quantity_items: number;
  companys: IJobHistory[];
}

export default () => {
  const [modal, setModal] = useState<boolean>(false);
  const {
    data: history,
    isLoading: isLoadingWork,
    request: requestListWork,
  } = useRequest<IJobList>({
    defaultValues: {
      quantity_items: 0,
      companys: [],
    },
    request: getWorkList,
  });

  const [job, setJob] = useState<IJobHistory>({
    company: "",
    office: "",
    office_description: "",
    when_arrived: new Date(),
    when_came_out: new Date(),
  });

  const formatJobInitialValue = (job: IJobHistory) => ({
    admissionDate: job.when_arrived
      .toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-"),
    dismissalDate: job.when_came_out
      .toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-"),
    companyName: job.company,
    office: job.office,
    jobDescription: job.office_description,
  });

  const handleOpenModal = () => setModal((state) => !state);

  const handleSaveNewJobHistory = async (values: any) => {
    const isSave = await saveNewWorkHistory({
      company: values.companyName,
      office: values.office,
      office_description: values.jobDescription,
      when_arrived: new Date(values.admissionDate),
      when_came_out: new Date(values.dismissalDate),
    });

    if (isSave) {
      requestListWork();
      return true;
    }

    return false;
  };

  return {
    history,
    isLoadingWork,
    job,
    modal,
    handleOpenModal,
    formatJobInitialValue,
    handleSaveNewJobHistory,
  };
};
