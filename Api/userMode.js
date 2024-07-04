const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
      name: {
        type: String
      },
      apellido: {
        type: String
      },
      edad: {
        type: String
      },
      correo: {
        type: String
      },
      sexo: {
        type: String
      }
    },
    {
        versionKey: false,
    }
)

const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;