import { Kit } from '../..';
import { AllianceGrantRequest } from '../../interfaces/allianceGrantRequest';
import CallService from '../../services/calls';
  
/**
 * Gets a list of grant requests
 * @returns {AllianceGrantRequest[]} The list of grant requests of your alliance
 */
export default async function allianceGrantRequestCall(this: Kit): Promise<AllianceGrantRequest[]> {
    const data = await CallService.makeCall(`AllianceGrantRequest?APICode=${this.apiKey}`);

    return data;
}