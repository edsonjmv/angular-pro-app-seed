import { Component, OnInit, OnDestroy } from "@angular/core";

import { Store } from "store";

import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { ScheduleService, ScheduleItem } from "../../../shared/services/schedule/schedule.service";

@Component({
  selector: "schedule",
  styleUrls: ["schedule.component.scss"],
  template: `
    <div class='schedule'>

      <schedule-calendar
        [date]='date$ | async'
        [items]="schedule$ | async"
        (change)='changeDate($event)'
        (select)="changeSection($event)">
      </schedule-calendar>

    </div>
  `
})
export class ScheduleComponent implements OnInit, OnDestroy {
  date$: Observable<Date>;
  schedule$: Observable<ScheduleItem[]>;
  subscription: Subscription[];

  constructor(private store: Store, private scheduleService: ScheduleService) {}

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  changeSection(event: any) {
    this.scheduleService.selectSection(event);
  }

  ngOnInit() {
    this.date$ = this.store.select("date");
    this.schedule$ = this.store.select("schedule");
    this.subscription = [
      this.scheduleService.schedule$.subscribe(),
      this.scheduleService.selected$.subscribe()
    ];
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => sub.unsubscribe());
  }
}
