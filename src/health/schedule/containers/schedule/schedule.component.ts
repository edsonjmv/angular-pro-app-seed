import { Component, OnInit, OnDestroy } from "@angular/core";

import { Store } from "store";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { ScheduleService } from "../../../shared/services/schedule/schedule.service";

@Component({
  selector: "schedule",
  styleUrls: ["schedule.component.scss"],
  template: `
    <div class='schedule'>

      <schedule-calendar
        [date]='date$ | async'>
      </schedule-calendar>

    </div>
  `
})
export class ScheduleComponent implements OnInit, OnDestroy {
  date$: Observable<Date>;
  subscription: Subscription[];

  constructor(private store: Store, private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.date$ = this.store.select("date");
    this.subscription = [this.scheduleService.schedule$.subscribe()];
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => sub.unsubscribe());
  }
}
