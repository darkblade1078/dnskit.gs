import { Kit } from '../..';
import { LoanHistory } from '../../interfaces/loanHistory';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    NationId: number
}

/**
 * Gets a nation's loan history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {LoanHistory[]} The loan history of a nation
 */
export default async function loanHistoryCall(this: Kit, params: Parameters): Promise<LoanHistory[]> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`NationLoanHistory?APICode=${this.apiKey}${query}`);

    return data;
}