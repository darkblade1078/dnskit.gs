import { Kit } from '../..';
import { AllianceBank } from '../../interfaces/allianceBank';
import CallService from '../../services/calls';
  
/**
 * Gets the contents of the alliance's bank
 * @returns {AllianceBank} The bank contents of the api key's alliance
 */
export default async function allianceBankCall(this: Kit): Promise<AllianceBank> {
    const data = await CallService.makeCall(`AllianceBankValues?APICode=${this.apiKey}`);

    return data[0];
}