import express from "express";
import axios from "axios";

const app = express();
const path = "http://echo-serv.tbxnet.com/v1";
const token = "aSuperSecretKey";
const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};

app.get("/secret/files", async (_, res) => {
  await axios
    .get(`${path}/secret/files`, headers)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err.code);
    });
});

app.get("/secret/file/:param", async (req, res) => {
  const lines = [];
  let count = 0;

  await axios
    .get(`${path}/secret/file/${req.params.param}`, headers)
    .then((response) => {
      response.data
        .toString()
        .split("\n")
        .forEach((line) => {
          if (line.trim() !== "") {
            const numCommas = (line.trim().match(/,/g) || []).length;

            if (numCommas === 3 && count > 0) {
              const values = line.split(",");

              lines.push({
                text: values[1],
                number: values[2],
                hex: values[3],
              });
            }
            count++;
          }
        });

      res.send({
        file: req.params.param,
        lines: lines,
      });
    })
    .catch((err) => {
      res.status(500).send(err.code);
    });
});

app.listen(3000, () => {
  console.log("Listen port:3000");
});
