import express from "express";
import cors from "cors";
import { welcomeRouter } from "../modules/welcome/welcomeRoute";
import { routeNotFoundHandler } from "./routeNotFoundHandler";
import { errorHandler } from "./errHandler";
import { authRouter } from "../modules/auth/authRouter";
import { accountsRouter } from "../modules/accounts/accountsRouter";
import { contactsRouter } from "../modules/contacts/contactsRouter";

// server

const server = express();

// middlewares

server.use(cors());
server.use(express.json());

// routes

server.use("", welcomeRouter);
server.use("/auth", authRouter);
server.use("/accounts", accountsRouter);
server.use("/contacts", contactsRouter);

// handlers

server.use(routeNotFoundHandler);
server.use(errorHandler);

export default server;
