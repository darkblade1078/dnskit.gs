import { Kit } from '../..';
import { LoanHistory } from '../../interfaces/loanHistory';
import CallService from '../../services/calls';

/**
 * Gets your alliance's loan history
 * @returns {LoanHistory[]} The loan history of your alliance
 */
export default async function allianceLoanRequestCall(this: Kit): Promise<LoanHistory[]> {
    const data = await CallService.makeCall(`AllianceLoanHistory?APICode=${this.apiKey}`);

    return data;
}