// backend/src/server.ts
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const ruta = process.env.RUTA || '/' ;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utiliza las rutas definidas en todoRoutes
app.use(ruta, todoRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});





