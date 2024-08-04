import { Kit } from '../..';
import { GrantHistory } from '../../interfaces/grantHistory';
import CallService from '../../services/calls';
  
/**
 * Gets your alliance's grant history
 * @returns {GrantHistory[]} Your alliance's grant history
 */
export default async function allianceGrantHistoryCall(this: Kit): Promise<GrantHistory[]> {
    const data = await CallService.makeCall(`AllianceGrantHistory?APICode=${this.apiKey}`);

    return data;
}