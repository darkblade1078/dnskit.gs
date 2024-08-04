import { Kit } from '../..';
import { Alliance } from '../../interfaces/alliance';
import CallService from '../../services/calls';
  
/**
 * Gets a list of alliances
 * @returns {Alliance[]} The list of alliances
 */
export default async function alliancesCall(this: Kit): Promise<Alliance[]> {
    const data = await CallService.makeCall(`alliance?APICode=${this.apiKey}`);

    return data;
}