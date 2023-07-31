import "./App.css";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

function App() {
  const currentDate = new Date();
  const schedulerData = [
    {
      startDate: "2023-08-01T09:45",
      endDate: "2023-08-02T11:00",
      title: "Andrew and Francesco at Beyonce",
    },
    {
      startDate: "2018-11-01T12:00",
      endDate: "2018-11-01T13:30",
      title: "Go to a gym",
    },
  ];

  return (
    <div className="App">
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} />
          <MonthView />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default App;
