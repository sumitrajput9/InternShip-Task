import express  from "express";
import cors from "cors";
import { configDb } from "./src/ConfigDb/configDb.js";
import router from "./src/Router/schoolRouter.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(6700,()=>{
   configDb();
  console.log("Server is Running Port number 6700");
})