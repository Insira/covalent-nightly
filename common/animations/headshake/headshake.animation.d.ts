import { AnimationTriggerMetadata } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';
/**
 * const tdHeadshakeAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a headshake animation.
 *
 * usage: [@tdHeadshake]="{ value: true | false, params: { duration: 200 }}"
 */
export declare const tdHeadshakeAnimation: AnimationTriggerMetadata;
/** @deprecated see tdHeadshakeAnimation */
export declare function TdHeadshakeAnimation(headshakeOptions?: IAnimationOptions): AnimationTriggerMetadata;
