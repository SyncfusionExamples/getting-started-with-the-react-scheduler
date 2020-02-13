import * as React from 'react';
import './App.css';
import * as DataSource from './datasource.json';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda,
  EventSettingsModel } from '@syncfusion/ej2-react-schedule';

class App extends React.Component {
  private localData: EventSettingsModel = {
    // dataSource: [{
    //   EndTime: new Date(2019, 0, 11, 6, 30),
    //   StartTime: new Date(2019, 0, 11, 4, 0),
    //   Subject: 'Testing',
    //   IsAllDay: true,
    //   RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=10'
    // }],
    dataSource: DataSource.scheduleData,
    fields: {
      id: "Id",
      subject: { name: 'Subject' },
      startTime: { name: 'StartTime' },
      endTime: { name: 'EndTime' },
      location: { name: 'Location' }
    }
  };
  public render() {
    return <ScheduleComponent currentView='Month' selectedDate={new Date(2019, 0, 6)} 
    eventSettings={ this.localData }> 
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>  
  }
};
export default App;