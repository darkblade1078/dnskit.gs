import DnsAPI from './api';

export class Kit extends DnsAPI {
    apiKey = '';

    public setKey(apiKey: string): void {
        this.apiKey = apiKey;
    }
}

const kit = new Kit();

for (const [key] of Object.entries(kit)) {
    //@ts-ignore
    exports[key] = kit[key];
}

exports.setKey = kit.setKey;

export default kit;