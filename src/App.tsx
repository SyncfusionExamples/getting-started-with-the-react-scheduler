import * as React from 'react';
import './App.css';
import * as DataSource from './datasource.json';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

class App extends React.Component {
  private schData: Object = DataSource.scheduleData;

  public render() {
    return <ScheduleComponent currentView='Month' selectedDate={new Date(2019, 0, 6)} 
    eventSettings={{dataSource: this.schData}}> 
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>  
  }
};
export default App;
