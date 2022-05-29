import { createServer } from "http";
import { parse } from "querystring";
import express from 'express'

const app = express();

app.get('/status', (_, response) => {
  response.send({ status: 'Okay'})
})

app.post('/authenticate', express.json(), (request, response) => {
  console.log(
    'E-mail', request.body.email,
    'Senha', request.body.password
  );
  response.send()
})


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});
