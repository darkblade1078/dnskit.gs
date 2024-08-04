import { Kit } from '../..';
import { MemberContribution } from '../../interfaces/memberContribution';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    NationId: number
}

/**
 * Gets a member's contribution
 * @param {Parameters} params Query parameters to customize your results
 * @returns {MemberContribution} The nation's contributions
 */
export default async function memberContributionCall(this: Kit, params: Parameters): Promise<MemberContribution> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`NationContribution?APICode=${this.apiKey}${query}`);

    return data[0];
}