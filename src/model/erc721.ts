import { AbstractContract } from "./abstract_contract";
import { BigNumber } from "@0x/utils";
import { IntentAction } from "marmojs";

export class ERC721 extends AbstractContract {

    public async approve(
        _operator: string,
        _assetId: BigNumber
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("approve", ['address', 'uint256'])
            .encode([_operator, _assetId.toString()]);
        return this.execute(intentAction);
    }

    public async transferFrom(
        _from: string,
        _to: string,
        _assetId: BigNumber
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("transferFrom", ['address', 'address', 'uint256'])
            .encode([_from, _to, _assetId.toString()]);
        return this.execute(intentAction);
    }

    public async safeTransferFrom1(
        _from: string,
        _to: string,
        _assetId: BigNumber
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("safeTransferFrom1", ['address', 'address', 'uint256'])
            .encode([_from, _to, _assetId.toString()]);
        return this.execute(intentAction);
    }

    public async safeTransferFrom2(
        _from: string,
        _to: string,
        _assetId: BigNumber,
        _userData: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("safeTransferFrom2", ['address', 'address', 'uint256', 'bytes'])
            .encode([_from, _to, _assetId.toString(), _userData]);
        return this.execute(intentAction);
    }

    public async setApprovalForAll(
        _operator: string,
        _authorized: boolean
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("setApprovalForAll", ['address', 'bool'])
            .encode([_operator, _authorized]);
        return this.execute(intentAction);
    }

}