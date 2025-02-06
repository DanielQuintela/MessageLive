import { Request, Response } from "express";
import cors from 'cors';
import express from 'express';
import { router } from "../../routes/router";
import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { Users } from "../../@types/user";


const app = express();
app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(router);

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: { origin: "*" }, 
});

const users: Users = {};

io.on("connection", (socket: Socket) => {
    console.log("Novo usuário conectado:", socket.id);
  
    // Evento para quando um usuário entra no chat
    socket.on("join", (username: string) => {     
      users[socket.id] = username;
      io.emit("userList", Object.values(users)); // Atualiza lista de usuários online
      io.emit("message", { user: "Sistema", text: `${username} entrou no chat.` });

    socket.emit("setUser", username);
    });
  
    // Evento para quando uma mensagem é enviada
    socket.on("sendMessage", (message) => {
      const user = users[socket.id];
      io.emit("message", { user, text: message });
    });
  
    // Evento para quando um usuário desconecta
    socket.on("logout", () => {
      console.log(`${socket.id}, Saiu!`);
      
      const username = users[socket.id];
      delete users[socket.id];
      io.emit("userList", Object.values(users));
      io.emit("message", { user: "Sistema", text: `${username} saiu do chat.` });
    });
  });


export { httpServer };