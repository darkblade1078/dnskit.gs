import { Kit } from '../..';
import { MemberContribution } from '../../interfaces/memberContribution';
import CallService from '../../services/calls';
  
/**
 * Gets your member's contributions
 * @returns {MemberContribution[]} All your member's contributions
 */
export default async function membersContributionsCall(this: Kit): Promise<MemberContribution[]> {
    const data = await CallService.makeCall(`AllianceMemberContribution?APICode=${this.apiKey}`);

    return data;
}