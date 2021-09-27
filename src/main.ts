import express from "express";

async function main() {
  const app = express();
  const port = 3000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "yoyoyo" });
  });

  app.get("/:id", (req, res) => {
    const id = req.params.id;
    req.user = { id, username: id + "-user" };
    res.json(req.user);
  });

  app.listen(port, () => {
    console.log("App listening at port:", port);
  });
}

main();
