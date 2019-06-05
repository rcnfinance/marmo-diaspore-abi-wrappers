import { BigNumber } from '@0x/utils';
import { Contract, Provider, Wallet } from 'marmojs';
export declare class LoanManager extends Contract {
    private _wallet;
    private _provider;
    private execute;
    requestLoan(_amount: BigNumber, _model: string, _oracle: string, _borrower: string, _salt: BigNumber, _expiration: BigNumber, _loanData: string): Promise<string>;
    approveRequest(_id: string): Promise<string>;
    registerApproveRequest(_id: string, _signature: string): Promise<string>;
    lend(_id: string, _oracleData: string, _cosigner: string, _cosignerLimit: BigNumber, _cosignerData: string): Promise<string>;
    cancel(_id: string): Promise<string>;
    cosign(_id: string, _cost: BigNumber): Promise<string>;
    settleLend(_requestData: string, _loanData: string, _cosigner: string, _maxCosignerCost: BigNumber, _cosignerData: string, _oracleData: string, _creatorSig: string, _borrowerSig: string): Promise<string>;
    settleCancel(_requestData: string, _loanData: string): Promise<string>;
    constructor(wallet: Wallet, provider: Provider);
    init(contractAddress: Promise<string>): Promise<void>;
}
//# sourceMappingURL=loan_manager.d.ts.map