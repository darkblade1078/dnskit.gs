import { Kit } from '../..';
import { AllianceLoanRequest } from '../../interfaces/allianceLoanRequest';
import CallService from '../../services/calls';
  
/**
 * Gets a list of loan requests
 * @returns {AllianceLoanRequest[]} The list of loan requests of your alliance
 */
export default async function allianceLoanRequestCall(this: Kit): Promise<AllianceLoanRequest[]> {
    const data = await CallService.makeCall(`AllianceLoanRequest?APICode=${this.apiKey}`);

    return data;
}