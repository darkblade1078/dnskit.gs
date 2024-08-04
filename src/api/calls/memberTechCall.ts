import { Kit } from '../..';
import { MemberTech } from '../../interfaces/memberTech';
import CallService from '../../services/calls';
  
/**
 * Gets your member's tech
 * @returns {MemberTech[]} All your member's tech
 */
export default async function memberTechCall(this: Kit): Promise<MemberTech[]> {
    const data = await CallService.makeCall(`AllianceTech?APICode=${this.apiKey}`);

    return data;
}