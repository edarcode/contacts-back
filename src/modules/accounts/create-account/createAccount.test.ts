import req from "supertest";
import server from "../../../server/server";

const ROUTE = "/accounts/create-account";

describe("POST /accounts/create-account", () => {
  it("Debería responder con status 400 si no envio email y password", async () => {
    const newUser = {};
    const res = await req(server).post(ROUTE).send(newUser);
    expect(res.statusCode).toBe(400);
  });

  it("Debería fallar si el email no tiene el formato correcto", async () => {
    const res = await req(server).post(ROUTE).send({
      email: "invalid-email", // email mal formado
      password: "ValidPassword123!",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("issues"); // Esperamos que devuelva un error de Zod
  });

  it("Debería fallar si el password no tiene el formato correcto", async () => {
    const res = await req(server).post(ROUTE).send({
      email: "test@gmail.com",
      password: "1", // password mal formado
    });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("issues"); // Esperamos que devuelva un error de Zod
  });
});
