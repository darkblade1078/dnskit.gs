import { Kit } from '../..';
import { MemberFunds } from '../../interfaces/memberFunds';
import CallService from '../../services/calls';

/**
 * Gets the funds of your members
 * @returns {MemberFunds[]} Your member's funds
 */
export default async function memberFundsCall(this: Kit): Promise<MemberFunds[]> {
    const data = await CallService.makeCall(`AllianceMemberFunds?APICode=${this.apiKey}`);

    return data;
}