import { Kit } from '../..';
import { LastPoliciesRan } from '../../interfaces/lastPoliciesRan';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    NationId: number
}

/**
 * Gets a member's last policies
 * @param {Parameters} params Query parameters to customize your results
 * @returns {Equipment} The member's last policies
 */
export default async function memberPolicyLastRan(this: Kit, params: Parameters): Promise<LastPoliciesRan> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`NationPolicyLastRan?APICode=${this.apiKey}${query}`);

    return data[0];
}