//configuración para leer el archivo .env al inicio del proyecto
import dotenv from 'dotenv'
dotenv.config()

export default {
  MONGO_DATABASE:process.env.MONGO_DATABASE || "urlvideos",
  MONGO_HOST:process.env.MONGO_HOST || "localhost",
  PORT:process.env.PORT || 3000
}