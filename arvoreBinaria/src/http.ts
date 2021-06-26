import express from "express";
import { createServer } from "http";
import { router } from "./routes";

const app = express();

const http = createServer(app);

app.use(express.json());
app.use(router);

export { http };