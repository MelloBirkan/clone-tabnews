import database from "infra/database";

async function index(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;")
  console.log(result.rows);
  response.status(200).json({"chave": "São acima da média"});
}

export default index