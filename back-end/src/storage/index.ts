/** @format */

import { root } from "@constants"
import multer from "multer"

const configuration = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, root)
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

const storage = multer({ storage: configuration })

export default storage
