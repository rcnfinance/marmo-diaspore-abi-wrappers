import { TransactionReceiptWithDecodedLogs } from 'ethereum-types';
export declare class Response {
    txHash: string;
    receiptAsync?: Promise<TransactionReceiptWithDecodedLogs>;
    constructor(txHash: string, receiptAsync?: Promise<TransactionReceiptWithDecodedLogs>);
}
//# sourceMappingURL=response.d.ts.map