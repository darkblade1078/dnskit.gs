import { Kit } from '../..';
import { MemberDeposits } from '../../interfaces/memberDeposits';
import CallService from '../../services/calls';

/**
 * Gets the deposits of your members
 * @returns {MemberDeposits[]} Your member's deposits
 */
export default async function memberDepositsCall(this: Kit): Promise<MemberDeposits[]> {
    const data = await CallService.makeCall(`AllianceMemberBankDeposits?APICode=${this.apiKey}`);

    return data;
}