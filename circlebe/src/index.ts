import dotenv from "dotenv";
import express, { Express } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger/swagger-output.json";
import { routerV1 } from "./routes/v1";
import { routerV2 } from "./routes/v2";
import cors from "cors"

dotenv.config();

const app: Express = express()
const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json())
if (process.env.NODE_ENV !== "production") {
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument, {
        explorer: true,
        swaggerOptions: {
            persistAuthorization: true,
            displayRequestDuration: true,
        },
    }))
}


app.use("/api/v1", routerV1)
app.use("/api/v2", routerV2)


app.listen(port, () => {
    console.log(`Listening on port ${port}`);

})