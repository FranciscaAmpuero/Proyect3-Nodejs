//importacion de express como framework y del directorio global de wiews/indes.ejs
import express from 'express' 
import{dirname, join} from 'path'
import { fileURLToPath } from 'url'
//importamos el documento de las rutas

//insportamos el archivo rutas
import indexRoutes from './routes/index.js'

//se declara como constante para express
const app = express()

//se declara una constante para importar la url
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))


app.listen(3000)
console.log('Server is listening on port', 3000)