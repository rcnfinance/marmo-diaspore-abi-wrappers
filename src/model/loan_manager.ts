import { BigNumber } from '@0x/utils';
import {
    Intent,
    IntentAction,
    IntentBuilder
} from 'marmojs';
import { AbstractContract } from './abstract_contract';

export class LoanManager extends AbstractContract {

    public async requestLoan(
        _amount: BigNumber,
        _model: string,
        _oracle: string,
        _borrower: string,
        _salt: BigNumber,
        _expiration: BigNumber,
        _loanData: string
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("requestLoan", ['uint128', 'address', 'address', 'address', 'uint256', 'uint64', 'bytes'])
            .encode([_amount.toString(), _model, _oracle, _borrower, _salt.toString(), _expiration.toString(), _loanData]);
        return this.execute(intentAction);
    }

    public async approveRequest(_id: string): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("approveRequest", ['bytes32'])
            .encode([_id]);
        return this.execute(intentAction);
    }

    public async registerApproveRequest(_id: string, _signature: string): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("registerApproveRequest", ['bytes32', 'bytes'])
            .encode([_id, _signature]);
        return this.execute(intentAction);
    }

    public async lend(
        _id: string,
        _oracleData: string,
        _cosigner: string,
        _cosignerLimit: BigNumber,
        _cosignerData: string,
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("lend", ['bytes32', 'bytes', 'address', 'uint256', 'bytes'])
            .encode([_id, _oracleData, _cosigner, _cosignerLimit.toString(), _cosignerData]);
        return this.execute(intentAction);
    }

    public async cancel(_id: string): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("cancel", ['bytes32'])
            .encode([_id]);
        return this.execute(intentAction);
    }

    public async cosign(_id: string, _cost: BigNumber): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("cosign", ['bytes32', 'uint256'])
            .encode([_id, _cost.toString()]);
        return this.execute(intentAction);
    }

    public async settleLend(
        _requestData: string,
        _loanData: string,
        _cosigner: string,
        _maxCosignerCost: BigNumber,
        _cosignerData: string,
        _oracleData: string,
        _creatorSig: string,
        _borrowerSig: string,
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("settleLend", ['bytes', 'bytes', 'address', 'uint256', 'bytes', 'bytes', 'bytes', 'bytes'])
            .encode([_requestData, _loanData, _cosigner, _maxCosignerCost.toString(), _cosignerData, _oracleData, _creatorSig, _borrowerSig]);
        return this.execute(intentAction);
    }

    public async settleCancel(
        _requestData: string,
        _loanData: string,
    ): Promise<string> {
        const intentAction: IntentAction = this.functionEncoder("settleCancel", ['bytes', 'bytes'])
            .encode([_requestData, _loanData]);
        return this.execute(intentAction);
    }
  
}