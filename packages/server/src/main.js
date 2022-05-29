import cors from "cors";
import express from "express";

const app = express();

app.get("/status", (_, response) => {
  response.send({ status: "Okay" });
});

const enableCors = cors({ origin: "http://localhost:3000/" });

app
  .options("/authenticate", enableCors)
  .post("/authenticate", enableCors, express.json(), (request, response) => {
    console.log("E-mail", request.body.email, "Senha", request.body.password);
    response.send({
      Okay: true
    })
  });

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});
