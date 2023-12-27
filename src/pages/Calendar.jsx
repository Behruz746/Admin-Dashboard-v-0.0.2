import React from "react";
import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components/PathIndex";

function Calendar() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-[#fff] rounded-3xl">
      <Header category="App" title="Calendar" />

      <ScheduleComponent
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
        // currentView="Month"
        height="650px"
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

export default Calendar;
