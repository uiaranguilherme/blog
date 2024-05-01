import { Schema, string, required } from "@validation"

export default Schema({
  company: [string("company is typeof string"), required("company is require")],
  office: [string("office is typeof string"), required("office is require")],
  office_description: [string("office_description is typeof string"), required("office_description is require")],
  when_arrived: [required("when_arrived is require")],
})
