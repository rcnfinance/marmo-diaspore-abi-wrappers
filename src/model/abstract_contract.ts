import { Contract, Wallet, Provider, IntentAction, Intent, IntentBuilder } from "marmojs";

export class AbstractContract extends Contract {
    protected _wallet?: Wallet;
    protected _provider?: Provider;

    constructor() {
        super()
    }

    protected async execute(intentAction: IntentAction): Promise<string> {
        if (this._wallet === undefined || this._provider === undefined) {
            return Promise.resolve<string>("0x");
        }

        const intent: Intent = new IntentBuilder().withIntentAction(intentAction).build();
        const signedIntent = this._wallet.sign(intent);
        await signedIntent.relay(this._provider);

        return Promise.resolve<string>(intent.id(this._wallet));
    }

    public async init(contractAddress: Promise<string>, wallet: Wallet, provider: Provider) {
        this.contractAddress = await contractAddress;
        this._wallet = wallet;
        this._provider = provider;
    }

}
