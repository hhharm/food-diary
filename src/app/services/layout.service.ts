import { debounce } from 'rxjs/operators';
import { ChangeDetectorRef, HostListener, Inject, NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription, timer } from 'rxjs';
const MAX_MOBILE = 1000;

export interface LayoutOptions {
  mobile: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private screenWidth: any;
  private currentIsMobile = false;
  private _isMobile$ = new BehaviorSubject<LayoutOptions>({ mobile: false });

  constructor(@Inject('Window') window: Window) {
    this.screenWidth = window.innerWidth;
    this._isMobile$.next({ mobile: this.screenWidth < MAX_MOBILE });

    fromEvent(window, 'resize')
      .pipe(debounce(() => timer(50)))
      .subscribe((newValue: any) => {
        this.screenWidth = newValue.target.innerWidth;
        if (this.currentIsMobile != this.screenWidth < MAX_MOBILE) {
          this.currentIsMobile = this.screenWidth < MAX_MOBILE;
          this._isMobile$.next({ mobile: this.screenWidth < MAX_MOBILE });
        }
      });
  }

  public get isMobile$() {
    return this._isMobile$.asObservable();
  }
}
