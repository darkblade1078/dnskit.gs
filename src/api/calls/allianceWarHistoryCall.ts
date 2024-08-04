import { Kit } from '../..';
import { WarHistory } from '../../interfaces/warHistory';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';

interface Parameters {
    AllianceId: number,
    StartDate?: string,
    StarDateEnd?: string,
    OnlyActive?: boolean,
    OnlyDefensive?: boolean,
    OnlyOffensive?: boolean,
}
  
/**
 * Gets an alliance's war history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {WarHistory[]} The war history of your alliance
 */
export default async function allianceWarHistoryCall(this: Kit, params: Parameters): Promise<WarHistory[]> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`AllianceWarHistory?APICode=${this.apiKey}${query}`);
    
    return data;
}