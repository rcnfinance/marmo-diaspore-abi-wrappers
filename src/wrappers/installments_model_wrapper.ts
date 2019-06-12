import { TxData } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { Response } from '../Response';
import { InstallmentsModel } from '../model/installments_modal';
import { Provider, Wallet } from 'marmojs';

export class InstallmentsModelMarmoContract {

    protected _installmentModel: InstallmentsModel;

    public async addPaid(
        id: string,
        amount: BigNumber,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._installmentModel.addPay(id, amount);
        return new Response(intentId, undefined);
    }

    public async addDebt(
        id: string,
        amount: BigNumber,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._installmentModel.addDebt(id, amount);
        return new Response(intentId, undefined);
    }

    public async fixClock(
        id: string,
        target: BigNumber,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._installmentModel.fixClock(id);
        return new Response(intentId, undefined);
    }

    public async run(
        id: string,
        txData: Partial<TxData> = {},
        estimateGasFactor?: number,
    ): Promise<Response> {
        const intentId = await this._installmentModel.run(id);
        return new Response(intentId, undefined);
    }

    constructor(contractAddress: Promise<string>, wallet: Wallet, provider: Provider) {
        this._installmentModel = new InstallmentsModel();
        this._installmentModel.init(contractAddress, wallet, provider);
    }

} 