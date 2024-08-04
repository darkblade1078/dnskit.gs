import { Kit } from '../..';
import { NationWarActionHistory } from '../../interfaces/nationWarActionHistory';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    WarId: number,
    StartDate?: string,
    StarDateEnd?: string,
    OnlyActive?: boolean,
    OnlyDefensive?: boolean,
    OnlyOffensive?: boolean,
}

/**
 * Gets a war's action history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {NationWarActionHistory[]} The war's action history
 */
export default async function nationWarActionHistoryCall(this: Kit, params: Parameters): Promise<NationWarActionHistory[]> {
    
    const query = queryBuilder(params);
    const data = await CallService.makeCall(`WarActionHistory?APICode=${this.apiKey}${query}`);

    return data;
}