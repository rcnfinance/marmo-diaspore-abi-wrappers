import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { Response } from '../Response';
import * as ethers from 'ethers';

export class InstallmentsModelMarmoContract {
    
    public create = {
        async sendTransactionAsync(
            id: string,
            data: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
        
        }
    };
    public addPaid = {
        async sendTransactionAsync(
            id: string,
            amount: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            
        }
    };
    public addDebt = {
        async sendTransactionAsync(
            id: string,
            amount: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            
        }
    };
    public fixClock = {
        async sendTransactionAsync(
            id: string,
            target: BigNumber,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            
        }
    };
    
    public run = {
        async sendTransactionAsync(
            id: string,
            txData: Partial<TxData> = {},
            estimateGasFactor?: number,
        ): Promise<Response> {
            
        }
    }
} 