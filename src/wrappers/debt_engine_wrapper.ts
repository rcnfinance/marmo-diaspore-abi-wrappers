import { TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
import { DebtEngine } from '../model/debt_engine';
import { Wallet, Provider } from 'marmojs';

export class DebtEngineMarmoContract {

    protected _debtEngine: DebtEngine;

    public async approve(
        _operator: string,
        _assetId: BigNumber,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.approve(_operator, _assetId);
        return new Response(intentId, undefined);
    }

    public async transferFrom(
        _from: string,
        _to: string,
        _assetId: BigNumber,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.transferFrom(_from, _to, _assetId);
        return new Response(intentId, undefined);
    }


    public async safeTransferFrom1(
        _from: string,
        _to: string,
        _assetId: BigNumber,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.safeTransferFrom1(_from, _to, _assetId);
        return new Response(intentId, undefined);
    }

    public async safeTransferFrom2(
        _from: string,
        _to: string,
        _assetId: BigNumber,
        _userData: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.safeTransferFrom2(_from, _to, _assetId, _userData);
        return new Response(intentId, undefined);
    }

    public async setApprovalForAll(
        _operator: string,
        _authorized: boolean,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.setApprovalForAll(_operator, _authorized);
        return new Response(intentId, undefined);
    }


    public async create(
        _model: string,
        _owner: string,
        _oracle: string,
        _data: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.create(_model, _owner, _oracle, _data);
        return new Response(intentId, undefined);
    }

    public async create2(
        _model: string,
        _owner: string,
        _oracle: string,
        _salt: BigNumber,
        _data: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.create2(_model, _owner, _oracle, _salt, _data);
        return new Response(intentId, undefined);
    }

    public async create3(
        _model: string,
        _owner: string,
        _oracle: string,
        _salt: BigNumber,
        _data: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.create3(_model, _owner, _oracle, _salt, _data);
        return new Response(intentId, undefined);
    }

    public async pay(
        _id: string,
        _amount: BigNumber,
        _origin: string,
        _oracleData: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.pay(_id, _amount, _origin, _oracleData);
        return new Response(intentId, undefined);
    }

    public async payToken(
        _id: string,
        _amount: BigNumber,
        _origin: string,
        _oracleData: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.payToken(_id, _amount, _origin, _oracleData);
        return new Response(intentId, undefined);
    }

    public async payBatch(
        _ids: string[],
        _amounts: BigNumber[],
        _origin: string,
        _oracle: string,
        _oracleData: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.payBatch(_ids, _amounts, _origin, _oracle, _oracle);
        return new Response(intentId, undefined);
    }

    public async payTokenBatch(
        _ids: string[],
        _tokenAmounts: BigNumber[],
        _origin: string,
        _oracle: string,
        _oracleData: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.payTokenBatch(_ids, _tokenAmounts, _origin, _oracle, _oracleData);
        return new Response(intentId, undefined);
    }

    public async run(
        _id: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.run(_id);
        return new Response(intentId, undefined);
    }

    public async withdraw(
        _id: string,
        _to: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.withdraw(_id, _to);
        return new Response(intentId, undefined); 
    }

    public async withdrawPartial(
        _id: string,
        _to: string,
        _amount: BigNumber,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.withdrawPartial(_id, _to, _amount);
        return new Response(intentId, undefined); 
    }

    public async withdrawBatch(
        _ids: string[],
        _to: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._debtEngine.withdrawBatch(_ids, _to);
        return new Response(intentId, undefined); 
    }

    constructor(contractAddress: Promise<string>, wallet: Wallet, provider: Provider) {
        this._debtEngine = new DebtEngine();
        this._debtEngine.init(contractAddress, wallet, provider);
    }

}