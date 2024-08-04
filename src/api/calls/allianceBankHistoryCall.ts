import { Kit } from '../..';
import { BankHistory } from '../../interfaces/bankHistory';
import CallService from '../../services/calls';
  
/**
 * Gets the contents of the alliance's bank history
 * @returns {BankHistory[]} The alliance's  bank history of the api key
 */
export default async function allianceBankHistoryCall(this: Kit): Promise<BankHistory[]> {
    const data = await CallService.makeCall(`AllianceBankHistory?APICode=${this.apiKey}`);

    return data;
}