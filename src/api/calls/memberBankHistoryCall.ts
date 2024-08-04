import { Kit } from '../..';
import { BankHistory } from '../../interfaces/bankHistory';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    NationId: number
}

/**
 * Gets a nation's bank history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {BankHistory[]} The bank history of a nation
 */
export default async function memberBankHistoryCall(this: Kit, params: Parameters): Promise<BankHistory[]> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`NationBankHistory?APICode=${this.apiKey}${query}`);

    return data;
}