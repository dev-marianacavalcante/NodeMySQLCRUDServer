const fastify = require("fastify")({
  //logger: true,
});

const {
  createConnection,
  solicitarItem,
  enviarItem,
  atualizarItem,
  deletarItem,
} = require("./db/mysql");

createConnection();

// GET método utilizado para SOLICITAR dados para o servidor.
fastify.get("/", async function (req, res) {
  console.log(await solicitarItem());
  res.send({ hello: "world" });
});

// POST usado para ENVIAR dados para o servidor.
fastify.post("/items", async function (req, res) {
  console.log(await enviarItem());
  res.send("Item adicionado com sucesso");
});

// PUT é usado para ATUALIZAR ou substituir completamente um recurso existente no servidor.
fastify.put("/items/:id", async function (req, res) {
  const id = req.params.id;
  const item = req.body;
  console.log(await atualizarItem(item, id));
  res.send("Item atualizado com sucesso");
});

// DELETE usado para REMOVER um recurso específico do servidor.
fastify.delete("/items/:id", function (req, res) {
  const id = req.params.id;
  console.log(deletarItem(id));
  res.send("Item deletado com sucesso");
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  } else {
    console.log("running " + address);
  }
});
