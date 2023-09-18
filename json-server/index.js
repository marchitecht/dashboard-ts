const fs = require("fs");
const jsonServer = require("json-server");
// const jwt = require("jsonwebtoken");
const path = require("path");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Not authorized" });
  }
  next();
});

server.use(jsonServer.defaults());

server.use(router);

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8")
  );
  const { users } = db;
  const userFromDB = users.find(
    (user) => user.username === username && user.password === password
  );

  if (userFromDB) {
    return res.json(userFromDB);
  }

  return res.status(401).json({ message: "Not authorized" });
});

server.listen(8000, () => {
    console.log("JSON Server is running");
})
