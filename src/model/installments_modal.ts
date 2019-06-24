import { BigNumber } from '@0x/utils';
import { IntentAction } from 'marmojs';
import { AbstractContract } from "./abstract_contract";

export class InstallmentsModel extends AbstractContract {

    public async addPaid(
        id: string,
        amount: BigNumber
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("addPaid", ['bytes32', 'uint256'])
            .encode([id, amount.toString()]);
        return this.execute(intentAction);
    }

    public async addDebt(
        id: string,
        amount: BigNumber
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("addDebt", ['bytes32', 'uint256'])
            .encode([id, amount.toString()]);
        return this.execute(intentAction);
    }

    public async fixClock(
        id: string,
        target: BigNumber
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("fixClock", ['bytes32', 'uint256'])
            .encode([id, target.toString()]);
        return this.execute(intentAction);
    }

    public async run(
        id: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("run", ['bytes32'])
            .encode([id]);
        return this.execute(intentAction);
    }

}
