import { Kit } from '../..';
import { Projects } from '../../interfaces/projects';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    NationId: number,
}

/**
 * Gets a nation's projects
 * @param {Parameters} params Query parameters to customize your results
 * @returns {Projects} The war's action history
 */
export default async function projectsCall(this: Kit, params: Parameters): Promise<Projects> {
    const query = queryBuilder(params);
    const data = await CallService.makeCall(`NationProjects?APICode=${this.apiKey}${query}`);

    return data[0];
}