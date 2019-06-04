import { TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
import { Provider, Wallet } from 'marmojs';
export declare class LoanManagerMarmoContract {
    private _loanManager;
    requestLoan: {
        sendTransactionAsync(_amount: BigNumber, _model: string, _oracle: string, _borrower: string, _salt: BigNumber, _expiration: BigNumber, _loanData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
    };
    constructor(contractAddress: string, wallet: Wallet, provider: Provider);
}
//# sourceMappingURL=loan_manager_wrapper.d.ts.map