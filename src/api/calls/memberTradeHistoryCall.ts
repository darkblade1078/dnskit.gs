import { Kit } from '../..';
import { TradeHistory } from '../../interfaces/tradeHistory';
import CallService from '../../services/calls';
import queryBuilder from '../../services/queryBuilder';
  
interface Parameters {
    NationId: number
}

/**
 * Gets a member's trade history
 * @param {Parameters} params Query parameters to customize your results
 * @returns {TradeHistory[]} The member's trade history
 */
export default async function memberTradeHistoryCall(this: Kit, params: Parameters): Promise<TradeHistory[]> {

    const query = queryBuilder(params);
    const data = await CallService.makeCall(`NationTradeHistory?APICode=${this.apiKey}${query}`);

    return data;
}