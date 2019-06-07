import { TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
import { LoanManager } from './../model/loan_manager';
import { Provider, Wallet } from 'marmojs';

export class LoanManagerMarmoContract {

    private _loanManager: LoanManager;

    public requestLoan = {
        async sendTransactionAsync(
            _amount: BigNumber,
            _model: string,
            _oracle: string,
            _borrower: string,
            _salt: BigNumber,
            _expiration: BigNumber,
            _loanData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as LoanManagerMarmoContract;
            const intentId = await self._loanManager.requestLoan(_amount, _model, _oracle, _borrower, _salt, _expiration, _loanData);
            return new Response(intentId, undefined);
        }
    }

    public approveRequest = {
        async sendTransactionAsync(
            _id: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as LoanManagerMarmoContract;
            const intentId = await self._loanManager.approveRequest(_id);
            return new Response(intentId, undefined);
        }
    }

    public registerApproveRequest = {
        async sendTransactionAsync(
            _id: string,
            _signature: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as LoanManagerMarmoContract;
            const intentId = await self._loanManager.registerApproveRequest(_id, _signature);
            return new Response(intentId, undefined);
        }
    }
    public lend = {
        async sendTransactionAsync(
            _id: string,
            _oracleData: string,
            _cosigner: string,
            _cosignerLimit: BigNumber,
            _cosignerData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as LoanManagerMarmoContract;
            const intentId = await self._loanManager.lend(_id, _oracleData, _cosigner, _cosignerLimit, _cosignerData);
            return new Response(intentId, undefined);
        }
    }
    public cancel = {
        async sendTransactionAsync(
            _id: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as LoanManagerMarmoContract;
            const intentId = await self._loanManager.cancel(_id);
            return new Response(intentId, undefined);
        }
    }
    public cosign = {
        async sendTransactionAsync(
            _id: string,
            _cost: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as LoanManagerMarmoContract;
            const intentId = await self._loanManager.cosign(_id, _cost);
            return new Response(intentId, undefined);
        }
    };

    public settleLend = {
        async sendTransactionAsync(
            _requestData: string,
            _loanData: string,
            _cosigner: string,
            _maxCosignerCost: BigNumber,
            _cosignerData: string,
            _oracleData: string,
            _creatorSig: string,
            _borrowerSig: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as LoanManagerMarmoContract;
            const intentId = await self._loanManager.settleLend(
                _requestData,
                _loanData,
                _cosigner,
                _maxCosignerCost,
                _cosignerData,
                _oracleData,
                _creatorSig,
                _borrowerSig);
            return new Response(intentId, undefined);
        }
    };
    public settleCancel = {
        async sendTransactionAsync(
            _requestData: string,
            _loanData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            const self = this as any as LoanManagerMarmoContract;
            const intentId = await self._loanManager.settleCancel(_requestData, _loanData);
            return new Response(intentId, undefined);
        }
    }

    constructor(contractAddress: Promise<string>, wallet: Wallet, provider: Provider) {
        this._loanManager = new LoanManager();
        this._loanManager.init(contractAddress, wallet, provider);
    }

} 