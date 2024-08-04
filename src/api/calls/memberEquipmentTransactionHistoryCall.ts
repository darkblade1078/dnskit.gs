import { Kit } from '../..';
import { EquipmentTransactionHistory } from '../../interfaces/equipmentTransactionHistory';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';

interface Parameters {
    NationId: number
}

/**
 * Gets a member's equipment transaction history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {EquipmentTransactionHistory[]} The member's equipment transaction history
 */
export default async function memberEquipmentTransactionHistoryCall(this: Kit, params: Parameters): Promise<EquipmentTransactionHistory[]> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`NationEquipmentTransactionHistory?APICode=${this.apiKey}${query}`);

    return data;
}