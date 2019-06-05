import { TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
import { Provider, Wallet } from 'marmojs';
export declare class LoanManagerMarmoContract {
    private _loanManager;
    requestLoan: {
        sendTransactionAsync(_amount: BigNumber, _model: string, _oracle: string, _borrower: string, _salt: BigNumber, _expiration: BigNumber, _loanData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
    };
    approveRequest: {
        sendTransactionAsync(_id: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
    };
    registerApproveRequest: {
        sendTransactionAsync(_id: string, _signature: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
    };
    lend: {
        sendTransactionAsync(_id: string, _oracleData: string, _cosigner: string, _cosignerLimit: BigNumber, _cosignerData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
    };
    cancel: {
        sendTransactionAsync(_id: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
    };
    cosign: {
        sendTransactionAsync(_id: string, _cost: BigNumber, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
    };
    settleLend: {
        sendTransactionAsync(_requestData: string, _loanData: string, _cosigner: string, _maxCosignerCost: BigNumber, _cosignerData: string, _oracleData: string, _creatorSig: string, _borrowerSig: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
    };
    settleCancel: {
        sendTransactionAsync(_requestData: string, _loanData: string, txData?: Partial<TxData>, estimateGasFactor?: number | undefined): Promise<Response>;
    };
    constructor(contractAddress: Promise<string>, wallet: Wallet, provider: Provider);
}
//# sourceMappingURL=loan_manager_wrapper.d.ts.map