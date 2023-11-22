"use strict";
// import http from "http";
// const PORT = 8080;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const server = http.createServer(async (req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(
//       JSON.stringify({
//         msg: "Hola, soy el home",
//       })
//     );
//     res.end;
//     return;
//   }
//   if (req.url === "/anidado" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(
//       JSON.stringify({
//         msg: "Hola, soy la ruta anidada",
//       })
//     );
//     res.end;
//     return;
//   }
//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.write(JSON.stringify({ msg: "Che, aca no hay nada" }));
//   res.end();
//   return;
// });
// server.listen(PORT, () => {
//   console.log(`Server corriendo en puerto ${PORT}`);
// });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.static("public"));
// app.get("/", (req, res) => {
//   res.send("Hola, soy el home");
// });
app.get("/paginaDePrueba", (req, res) => {
    res.sendFile(__dirname + "/public/paginaDePrueba.html");
});
app.listen(PORT, () => {
    console.log(`Server corriendo en puerto ${PORT}`);
});
