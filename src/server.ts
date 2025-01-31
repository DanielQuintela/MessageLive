import { httpServer } from "./infra/websocket/websocketListener";

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
