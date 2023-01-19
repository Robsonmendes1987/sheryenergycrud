"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017')
    .then(function () {
    var App = (0, express_1.default)();
    App.use(express_1.default.json());
    App.listen(3001, function () { console.log('rodando na porta 3001'); });
})
    .catch(function () { return console.log('falha ao conectar no banco'); });
