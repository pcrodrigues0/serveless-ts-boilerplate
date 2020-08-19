import * as express from "express";
import * as asyncHandler from "express-async-handler";
import serverlessHttp = require("serverless-http");


const app: express.Application = express();
app.use(express.json());

app.get(
    "/oi",
    asyncHandler(
        async (req: express.Request, res: express.Response): Promise<void> => {
            res.json({ message: "Hello, world!" });
        }
    )
);

export const handler = serverlessHttp(app);
