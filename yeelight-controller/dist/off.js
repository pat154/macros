"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yeelight_node_1 = require("yeelight-node");
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const args = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv)).argv;
// @ts-ignore
const ipAddress = args.ipAddress; // 🤷
console.log(args);
const yeelight = new yeelight_node_1.Yeelight({ ip: ipAddress, port: 55443 });
yeelight.get_prop('power').then((data) => {
    console.log(data);
});
