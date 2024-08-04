import { Kit } from '../..';
import { Nation } from '../../interfaces/nation';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    NationId: number
}

/**
 * Gets a nation's data
 * @param {Parameters} params Query parameters to customize your results
 * @returns {Nation} The nation's data
 */
export default async function nationCall(this: Kit, params: Parameters): Promise<Nation> {
    
    const query = queryBuilder(params);
    const data = await CallService.makeCall(`nation?APICode=${this.apiKey}${query}`);

    return data[0];
}