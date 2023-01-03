import { Yeelight } from 'yeelight-node';
import yargs, { Argv } from 'yargs';
import { hideBin } from 'yargs/helpers';
import { exit } from 'process';

const args = yargs(hideBin(process.argv)).argv;

// @ts-ignore
const ipAddress = args.ipAddress as string; // 🤷

const yeelight = new Yeelight({ ip: ipAddress, port: 55443 });

console.log('Toggling light: ', ipAddress);
yeelight
  .get_prop('power')
  .then((data: any) => {
    const res = JSON.parse(data);
    console.log(data);
    if (res.result.includes('on')) {
      yeelight
        .set_power('off')
        .then(() => exit(0))
        .catch((e: Error) => {
          console.error(e);
          exit(1);
        });
      return;
    }
    yeelight
      .set_power('on')
      .then(() => exit(0))
      .catch((e: Error) => {
        console.error(e);
        exit(1);
      });
  })
  .catch((e: Error) => {
    console.error(e);
    exit(1);
  });
