import { IntentAction } from 'marmojs';
import { AbstractContract } from "./abstract_contract";
import { ERC721 } from "./erc721";
import { BigNumber } from '@0x/utils';

export class DebtEngine extends ERC721 {

    public async create(
        _model: string,
        _owner: string,
        _oracle: string,
        _data: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("create", ['address', 'address', 'address', 'bytes'])
            .encode([_model, _owner, _oracle, _data]);
        return this.execute(intentAction);
    }

    public async create2(
        _model: string,
        _owner: string,
        _oracle: string,
        _salt: BigNumber,
        _data: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("create2", ['address', 'address', 'address', 'uint256', 'bytes'])
            .encode([_model, _owner, _oracle, _salt.toString(), _data]);
        return this.execute(intentAction);
    }

    public async create3(
        _model: string,
        _owner: string,
        _oracle: string,
        _salt: BigNumber,
        _data: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("create3", ['address', 'address', 'address', 'uint256', 'bytes'])
            .encode([_model, _owner, _oracle, _salt.toString(), _data]);
        return this.execute(intentAction);
    }

    public async pay(
        _id: string,
        _amount: BigNumber,
        _origin: string,
        _oracleData: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("pay", ['bytes32', 'uint256', 'address', 'bytes'])
            .encode([_id, _amount.toString(), _origin, _oracleData]);
        return this.execute(intentAction);
    }

    public async payToken(
        _id: string,
        _amount: BigNumber,
        _origin: string,
        _oracleData: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("payToken", ['bytes32', 'uint256', 'address', 'bytes'])
            .encode([_id, _amount.toString(), _origin, _oracleData]);
        return this.execute(intentAction);
    }

    public async payBatch(
        _ids: string[],
        _amounts: BigNumber[],
        _origin: string,
        _oracle: string,
        _oracleData: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("payBatch", ['bytes32[]', 'uint256[]', 'address', 'address', 'bytes'])
            .encode([_ids, _amounts, _origin, _oracle, _oracleData]);
        return this.execute(intentAction);
    }

    public async payTokenBatch(
        _ids: string[],
        _tokenAmounts: BigNumber[],
        _origin: string,
        _oracle: string,
        _oracleData: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("payTokenBatch", ['bytes32[]', 'uint256[]', 'address', 'address', 'address'])
            .encode([_ids, _tokenAmounts, _origin, _oracle, _oracleData]);
        return this.execute(intentAction);
    }

    public async run(
        _id: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("run", ['bytes32'])
            .encode([_id]);
        return this.execute(intentAction);
    }

    public async withdraw(
        _id: string,
        _to: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("withdraw", ['address', 'address'])
            .encode([_id, _to]);
        return this.execute(intentAction);
    }

    public async withdrawPartial(
        _id: string,
        _to: string,
        _amount: BigNumber
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("withdrawPartial", ['address', 'address', 'uint256'])
            .encode([_id, _to, _amount.toString()]);
        return this.execute(intentAction);
    }

    public async withdrawBatch(
        _ids: string[],
        _to: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("withdrawBatch", ['bytes32[]', 'address'])
            .encode([_ids, _to]);
        return this.execute(intentAction);
    }

}
