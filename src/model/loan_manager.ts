import { BigNumber } from '@0x/utils';
import {
    Intent,
    IntentAction,
    IntentBuilder,
    Contract,
    Provider,
    Wallet
} from 'marmojs';

export class LoanManager extends Contract {

    private _wallet: Wallet;
    private _provider: Provider;

    private async execute(intentAction: IntentAction): Promise<string> {
        const intent: Intent = new IntentBuilder().withIntentAction(intentAction).build();
        const signedIntent = this._wallet.sign(intent);
        await signedIntent.relay(this._provider);

        return Promise.resolve<string>(intent.id(this._wallet));
    }

    async requestLoan(
        _amount: BigNumber,
        _model: string,
        _oracle: string,
        _borrower: string,
        _salt: BigNumber,
        _expiration: BigNumber,
        _loanData: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("requestLoan", ['uint128', 'address', 'address', 'address', 'uint256', 'uint64', 'bytes'])
            .encode([_amount, _model, _oracle, _borrower, _salt, _expiration, _loanData]);
        return this.execute(intentAction);
    }

    async approveRequest(_id: string): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("approveRequest", ['bytes32'])
            .encode([_id]);
        return this.execute(intentAction);
    }

    async registerApproveRequest(_id: string, _signature: string): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("registerApproveRequest", ['bytes32', 'bytes'])
            .encode([_id, _signature]);
        return this.execute(intentAction);
    }

    async lend(
        _id: string,
        _oracleData: string,
        _cosigner: string,
        _cosignerLimit: BigNumber,
        _cosignerData: string,
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("lend", ['bytes32', 'bytes', 'address', 'uint256', 'bytes'])
            .encode([_id, _oracleData, _cosigner, _cosignerLimit, _cosignerData]);
        return this.execute(intentAction);
    }

    async cancel(_id: string): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("cancel", ['bytes32'])
            .encode([_id]);
        return this.execute(intentAction);
    }

    async cosign(_id: string, _cost: BigNumber): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("cosign", ['bytes32', 'uint256'])
            .encode([_id, _cost]);
        return this.execute(intentAction);
    }

    async settleLend(
        _requestData: string,
        _loanData: string,
        _cosigner: string,
        _maxCosignerCost: BigNumber,
        _cosignerData: string,
        _oracleData: string,
        _creatorSig: string,
        _borrowerSig: string,
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("settleLend", ['bytes', 'bytes', 'address', 'uint256', 'bytes', 'bytes', 'bytes', 'bytes'])
            .encode([_requestData, _loanData, _cosigner, _maxCosignerCost, _cosignerData, _oracleData, _creatorSig, _borrowerSig]);
        return this.execute(intentAction);
    }

    async settleCancel(
        _requestData: string,
        _loanData: string,
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("settleCancel", ['bytes', 'bytes'])
            .encode([_requestData, _loanData]);
        return this.execute(intentAction);
    }


    constructor(wallet: Wallet, provider: Provider) {
        super();
        this._wallet = wallet;
        this._provider = provider;
    }

    public async init(contractAddress: Promise<string>) {
        this.contractAddress = await contractAddress;
    }

}