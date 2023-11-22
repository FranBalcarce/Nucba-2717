"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRouteController = exports.postController = exports.logController = void 0;
const logController = (req, res) => {
    const method = req.method;
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Metodo ${method} fue ejecutado en el controlador LOG`);
    res.json({
        message: "Hola, desde el controlador",
        method,
        timestamp,
    });
};
exports.logController = logController;
const postController = (req, res) => {
    const method = req.method;
    const timestamp = new Date().toLocaleString();
    console.log(req.headers.holis);
    console.log(`[${timestamp}] Metodo ${method} fue ejecutado en el controlador postController`);
    const saludo = req.body.saludo;
    if (!saludo) {
        console.error(`[${timestamp}] Falta el campo 'saludo' en la solicitud`);
        res.status(400).json({
            error: "Campo faltante",
            message: "Falta el campo 'saludo' en la solicitud",
        });
        return;
    }
    res.json({
        message: "Hola desde el postController",
        receivedSaludo: saludo,
        method,
        timestamp,
    });
};
exports.postController = postController;
const newRouteController = (req, res) => {
    const method = req.method;
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Metodo ${method} fue ejecutado en la nueva ruta`);
    res.json({
        message: "Hola desde la nueva ruta",
        method,
        timestamp,
    });
};
exports.newRouteController = newRouteController;
