import { Kit } from '../..';
import { Equipment } from '../../interfaces/equipment';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';

interface Parameters {
    NationId: number
}

/**
 * Gets a member's current equipment
 * @param {Parameters} params Query parameters to customize your results
 * @returns {Equipment} The member's current equipment
 */
export default async function memberInventoryCall(this: Kit, params: Parameters): Promise<Equipment[]> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`AllianceMemberInventory?APICode=${this.apiKey}${query}`);

    return data;
}