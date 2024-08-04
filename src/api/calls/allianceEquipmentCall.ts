import { Kit } from '../..';
import { Equipment } from '../../interfaces/equipment';
import CallService from '../../services/calls';
  
/**
 * Gets the contents of the alliance's equipment reserves
 * @returns {Equipment[]} The alliance's bank equipment reserves from the api key
 */
export default async function allianceEquipmentCall(this: Kit): Promise<Equipment[]> {
    const data = await CallService.makeCall(`AllianceInventory?APICode=${this.apiKey}`);

    return data;
}