import { Yeelight } from 'yeelight-node';
import yargs, { Argv } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { exit } from 'process';

const args = yargs(hideBin(process.argv)).argv;

// @ts-ignore
const ipAddress = args.ipAddress as string; // 🤷
console.log(args);

const yeelight = new Yeelight({ ip: ipAddress, port: 55443 });

yeelight.set_power('on').then((data: any) => {
  exit();
});
