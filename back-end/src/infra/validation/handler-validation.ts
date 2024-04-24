import { IValidation, ISchema, FunctionValidation } from "../interface/ivalidation"
import required from "./validations-functions/required"
import cpf from "./validations-functions/cpf"
import string from "./validations-functions/string"
import password from "./validations-functions/password"
import email from "./validations-functions/email"
import array from "./validations-functions/array"

export const Schema = <T>(Schema: ISchema & T) => {
  return {
    schema: Schema,
    validation: function <Y>(object: any & Y): IValidation {
      let isValid = true
      let errors: string[] = []

      //realiza mapeamento das keys...
      const mapVerify = (obj: any, schema: any) => {
        if (schema === undefined || obj === undefined) {
          throw new Error("Unable to obtain validation object or schema")
        }

        Object.keys(schema).forEach((key: string) => {
          if (typeof schema[key] !== "object") {
            throw new Error("Validation scheme in incorrect format")
          }

          if (Array.isArray(schema[key]) === false && schema[key] !== null) {
            mapVerify(obj[key], schema[key])
          } else {
            /*if (obj[key] === undefined || obj[key] === null) {
              throw new Error(`Não foi possivel obter key : ${key} do objeto na validação.`)
            }*/

            if (schema[key] !== undefined) {
              schema[key].map((validation: FunctionValidation) => {
                var { Error } = validation({
                  key: key,
                  value: obj[key],
                  values: obj,
                })
                //var { Error } = validation(object[primaryKey][secondyKey][thirdKey], object)
                if (Error !== null) {
                  isValid = false
                  errors.push(Error)
                }
              })
            }
          }
        })
      }

      mapVerify(object, Schema)
      return { isValid, errors }
    },
  }
}

export { required, cpf, string, password, email, array }
