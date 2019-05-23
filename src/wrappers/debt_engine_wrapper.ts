import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { Response } from '../Response';
import * as ethers from 'ethers';

export class DebtEngineMarmoContract {

    public approve = {
        async sendTransactionAsync(
            _operator: string,
            _assetId: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };

    public transferFrom = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };

    public safeTransferFrom1 = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        },

    };
    public setApprovalForAll = {
        async sendTransactionAsync(
            _operator: string,
            _authorized: boolean,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };
    public safeTransferFrom2 = {
        async sendTransactionAsync(
            _from: string,
            _to: string,
            _assetId: BigNumber,
            _userData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        },
    };
    public create = {
        async sendTransactionAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _data: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };
    public create2 = {
        async sendTransactionAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };
    public create3 = {
        async sendTransactionAsync(
            _model: string,
            _owner: string,
            _oracle: string,
            _salt: BigNumber,
            _data: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };
    public pay = {
        async sendTransactionAsync(
            _id: string,
            _amount: BigNumber,
            _origin: string,
            _oracleData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };
    public payToken = {
        async sendTransactionAsync(
            id: string,
            amount: BigNumber,
            origin: string,
            oracleData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };
    public payBatch = {
        async sendTransactionAsync(
            _ids: string[],
            _amounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };
    public payTokenBatch = {
        async sendTransactionAsync(
            _ids: string[],
            _tokenAmounts: BigNumber[],
            _origin: string,
            _oracle: string,
            _oracleData: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };
    public run = {
        async sendTransactionAsync(
            _id: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO:
        }
    };
    public withdraw = {
        async sendTransactionAsync(
            _id: string,
            _to: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO: 
        }
    };
    public withdrawPartial = {
        async sendTransactionAsync(
            _id: string,
            _to: string,
            _amount: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO: 
        }
    }
    public withdrawBatch = {
        async sendTransactionAsync(
            _ids: string[],
            _to: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            //TODO: 
        }
    };
}