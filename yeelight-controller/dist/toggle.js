"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yeelight_node_1 = require("yeelight-node");
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const process_1 = require("process");
const args = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv)).argv;
// @ts-ignore
const ipAddress = args.ipAddress; // 🤷
const yeelight = new yeelight_node_1.Yeelight({ ip: ipAddress, port: 55443 });
console.log('Toggling light: ', ipAddress);
yeelight
    .get_prop('power')
    .then((data) => {
    const res = JSON.parse(data);
    console.log(data);
    if (res.result.includes('on')) {
        yeelight
            .set_power('off')
            .then(() => (0, process_1.exit)(0))
            .catch((e) => {
            console.error(e);
            (0, process_1.exit)(1);
        });
        return;
    }
    yeelight
        .set_power('on')
        .then(() => (0, process_1.exit)(0))
        .catch((e) => {
        console.error(e);
        (0, process_1.exit)(1);
    });
})
    .catch((e) => {
    console.error(e);
    (0, process_1.exit)(1);
});
