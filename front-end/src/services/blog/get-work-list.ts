import blog from ".";
import IJobHistory from "../../hooks/interfaces/ijob-history";

interface IGetWorkList {
  quantity_items: number;
  companys: IJobHistory[];
}

export default async () => {
  const data = await blog.Get<IGetWorkList>("/work-history");

  if (data.isSuccess && data.value !== undefined) {
    return data.value;
  }

  return {
    quantity_items: 0,
    companys: [],
  };
};
