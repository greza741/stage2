import dotenv from "dotenv";
import express, { Express } from "express";
import { routeV1 } from "./routes/v1";
import { routerV2 } from "./routes/v2";

dotenv.config();

const app: Express = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.use("/api/v1", routeV1)
app.use("/api/v2", routerV2)


app.listen(port, () => {
    console.log(`Listening on port ${port}`);

})