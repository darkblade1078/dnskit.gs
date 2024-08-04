import { Kit } from '../..';
import { MemberBuildings } from '../../interfaces/memberBuildings';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    NationId: number
    info?: boolean
}

/**
 * Gets a nation's build
 * @param {Parameters} params Query parameters to customize your results
 * @returns {MemberBuildings} The nation's build
 */
export default async function memberBuildingsCall(this: Kit, params: Parameters): Promise<MemberBuildings> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`NationBuildings?APICode=${this.apiKey}${query}`);

    return data[0];
}