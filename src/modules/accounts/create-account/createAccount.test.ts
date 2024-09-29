import req from "supertest";
import server from "../../../server/server";

describe("POST /accounts/create-account", () => {
  it("Debería responder con status 400 si no envio email y password", async () => {
    const newUser = {};
    const res = await req(server)
      .post("/accounts/create-account")
      .send(newUser);
    expect(res.statusCode).toBe(400);
  });

  // it("Debería crear un nuevo usuario si los datos son válidos", async () => {
  //   const newUser = {
  //     email: "doe@example.com",
  //     password: "pass123",
  //   };

  //   const res = await req(server).post("/users/create-user").send(newUser);
  //   expect(res.statusCode).toBe(201);
  // });
});
