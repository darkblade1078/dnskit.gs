import { Kit } from '../..';
import { EquipmentTransactionHistory } from '../../interfaces/equipmentTransactionHistory';
import CallService from '../../services/calls';

/**
 * Gets the contents of your alliance's equipment transaction history
 * @returns {EquipmentTransactionHistory[]} Your alliance's equipment transaction history
 */
export default async function allianceEquipmentTransactionHistoryCall(this: Kit): Promise<EquipmentTransactionHistory[]> {
    const data = await CallService.makeCall(`AllianceEquipmentTransactionHistory?APICode=${this.apiKey}`);

    return data;
}