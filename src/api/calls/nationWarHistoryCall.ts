import { Kit } from '../..';
import { WarHistory } from '../../interfaces/warHistory';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    NationId: number,
    StartDate?: string,
    StarDateEnd?: string,
    OnlyActive?: boolean,
    OnlyDefensive?: boolean,
    OnlyOffensive?: boolean,
}

/**
 * Gets a nation's war history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {WarHistory[]} The nation's war history
 */
export default async function nationWarHistoryCall(this: Kit, params: Parameters): Promise<WarHistory[]> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`NationWarHistory?APICode=${this.apiKey}${query}`);

    return data;
}