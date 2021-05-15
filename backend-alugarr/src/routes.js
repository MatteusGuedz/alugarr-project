const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionController = require("./controlers/SessionController");
const ImovelController = require("./controlers/ImovelController");
const DashboardController = require("./controlers/DashboardController");
const BookingController = require("./controlers/BookingController");



routes.post("/sessions",SessionController.store );
routes.get("/imoveis", ImovelController.index );
routes.get("/bairro/:bairro", ImovelController.listaFilter);
routes.get("/dashboard", DashboardController.show);
routes.post("/imoveis",upload.single('thumbnail'), ImovelController.store ); //varias imgs usa .array(doc do multer)
routes.post("/imoveis/:imovel_id/bookings", BookingController.store)

module.exports = routes;