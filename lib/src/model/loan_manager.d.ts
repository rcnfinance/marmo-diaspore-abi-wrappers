import { BigNumber } from '@0x/utils';
import { Contract, Provider, Wallet } from 'marmojs';
export declare class LoanManager extends Contract {
    private _wallet;
    private _provider;
    requestLoan(_amount: BigNumber, _model: string, _oracle: string, _borrower: string, _salt: BigNumber, _expiration: BigNumber, _loanData: string): Promise<void>;
    constructor(contractAddress: string, wallet: Wallet, provider: Provider);
}
//# sourceMappingURL=loan_manager.d.ts.map