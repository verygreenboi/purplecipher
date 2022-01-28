import { animationFrameScheduler, of, SchedulerAction, SchedulerLike, Subscription } from 'rxjs';

const webScheduler: SchedulerLike = animationFrameScheduler;

const asyncScheduler: SchedulerLike = {
  now(): number {
    return Date.now();
  },
  schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription {
    const handler = setTimeout(work, delay ?? 0);
    return of().subscribe(
      () => clearTimeout(handler)
    );
  }
};

export const universalAnimationFrameScheduler = (isBrowser = false): SchedulerLike => webScheduler;
