import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Response } from '../Response';
import * as ethers from 'ethers';

export class LoanManagerMarmoContract {

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
            //TODO:
        }
    }
    public approveRequest = {
        async sendTransactionAsync(
            _id: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    }
    public registerApproveRequest = {
        async sendTransactionAsync(
            _id: string,
            _signature: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
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
            //TODO:
        }
    }
    public cancel = {
        async sendTransactionAsync(
            _id: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    }
    public cosign = {
        async sendTransactionAsync(
            _id: BigNumber,
            _cost: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
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
            //TODO:
        }
    };
    public settleCancel = {
        async sendTransactionAsync(
            _requestData: string,
            _loanData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    }
} 