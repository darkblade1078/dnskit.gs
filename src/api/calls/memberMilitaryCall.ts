import { Kit } from '../..';
import { MemberMilitary } from '../../interfaces/memberMilitary';
import CallService from '../../services/calls';
  
/**
 * Gets your member's military
 * @returns {MemberMilitary[]} Your member's military
 */
export default async function memberMilitaryCall(this: Kit): Promise<MemberMilitary[]> {
    const data = await CallService.makeCall(`AllianceMilitary?APICode=${this.apiKey}`);

    return data;
}