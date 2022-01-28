import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mapTo, switchMap } from 'rxjs/operators';
import { ANIMATION_FRAME } from '@ng-web-apis/common';

@Injectable()
export class LayoutHelperService {
  showNavSubject = new BehaviorSubject<boolean>(true);
  showNav$ = this.showNavSubject.asObservable().pipe(
    switchMap(value => this.animationFrame$.pipe(
      mapTo(value)
    ))
  );
  constructor(
    @Inject(ANIMATION_FRAME)
    private readonly animationFrame$: Observable<number>
  ) {
  }
  toggleNav(show = true) {
    this.showNavSubject.next(show);
  }
}
