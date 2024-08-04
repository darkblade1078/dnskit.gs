import { Kit } from '../..';
import { AllianceApplication } from '../../interfaces/allianceApplication';
import CallService from '../../services/calls';
  
/**
 * Gets a list of current applications
 * @returns {AllianceApplication[]} The list of applications from the api key's alliance
 */
export default async function allianceApplicationsCall(this: Kit): Promise<AllianceApplication[]> {
    const data = await CallService.makeCall(`AllianceApplication?APICode=${this.apiKey}`);

    return data;
}