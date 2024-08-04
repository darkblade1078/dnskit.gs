import { Kit } from '../..';
import { MemberEffects } from '../../interfaces/memberEffects';
import CallService from '../../services/calls';
  
/**
 * Gets the effects of your members
 * @returns {MemberEffects[]} Your member's effects
 */
export default async function memberEffectsCall(this: Kit): Promise<MemberEffects[]> {
    const data = await CallService.makeCall(`NationsEffectsSummary?APICode=${this.apiKey}`);

    return data;
}