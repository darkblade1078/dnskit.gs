import { Kit } from '../..';
import { TaxIncome } from '../../interfaces/taxIncome';
import CallService from '../../services/calls';
  
/**
 * Gets your alliance's tax income
 * @returns {TaxIncome} The tax income of your alliance
 */
export default async function allianceTaxIncomeCall(this: Kit): Promise<TaxIncome> {
    const data = await CallService.makeCall(`AllianceTaxIncome?APICode=${this.apiKey}`);

    return data[0];
}