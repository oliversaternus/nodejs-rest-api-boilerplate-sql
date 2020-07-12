import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import sequelize from "./models";
import autoCatch from "./tools/catch";

const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/deploy",
    autoCatch(async (req, res) => {
        res.sendStatus(200);
    }));

app.use((err: any, req: any, res: any, next: any) => {
    res.status(Number(err.message) || 500);
    res.send();
});

const server = createServer(app);
server.listen(8888, () => {
    console.log(`server started at http://localhost:8888`);
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("connected");
    } catch (e) {
        console.log("error");
    }
})();
