import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import router from "./routs/routers";
import cors from "cors";

const app = express();
const PORT = 5088;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected Successfull");
    app.listen(PORT, (): void => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("Error Connecting database" + err));
