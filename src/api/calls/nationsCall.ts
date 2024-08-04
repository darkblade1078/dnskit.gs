import { Kit } from '../..';
import { Nation } from '../../interfaces/nation';
import CallService from '../../services/calls';
  
/**
 * Gets every nation
 * @returns {Nation[]} All the nation data
 */
export default async function nationsCall(this: Kit): Promise<Nation[]> {
    const data = await CallService.makeCall(`nation?APICode=${this.apiKey}`);

    return data;
}