import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import './main.scss'
import { createEventInstance } from '@fullcalendar/core'
import axios from 'axios';

export default class Calendar extends React.Component {

  calendarComponentRef = React.createRef()
  state = {
    calendarWeekends: true,
    calendarEvents: [ // initial event data
      { title: 'Event Now', start: new Date() }
    ]
  }

  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
        </div>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[ dayGridPlugin, timeGridPlugin ]}
            ref={ this.calendarComponentRef }
            weekends={ this.state.calendarWeekends }
            events={ this.state.calendarEvents }
            dateClick={ this.handleDateClick }
            />
        </div>
        <form onSubmit={this.handleSubmit} style={{display:'flex'}}>

              title
                <input type="text" 
                name="title" 
                placeaholder="add todo .."
                style={{flex:'10'}}
                />

                start time
                <input type="datetime-local" id="start" name="start" />

                end time
                <input type="datetime-local" id="end" name="end" />

                guest email
                <input type="text"  name="guest" 
                placeaholder="add todo .."
                style={{flex:'10'}}
                />
                description
                <input type="text" 
                name="description" 
                placeaholder="add todo .."
                style={{flex:'10'}}
                />
                <input 
                type="submit"
                value="Submit"
                className = "btn"
                style={{flex:'1'}}
          
                />
            </form>
      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.title.value);
    console.log(event.target.start.value);
    console.log(event.target.end.value);
    console.log(event.target.guest.value);
    console.log(event.target.description.value);
    this.createEvent(event);
    this.callAPI(event);
  }

  createEvent =(event) =>{
    var title= event.target.title.value
    var start = Date.parse(event.target.start.value)
    var end = Date.parse(event.target.end.value)
    var guest = event.target.guest.value
    var desc = event.target.description.value
    this.setState({  // add new event data
      calendarEvents: this.state.calendarEvents.concat({ // creates a new array
        title: title,
        start: start,
        end: end,
        url: "http://google.com/"
      })
    })
  }

  toggleWeekends = () => {
      this.setState({ // update a property
        calendarWeekends: !this.state.calendarWeekends
      })
    }

  // test with bobtestpizza001@gmail.com  and  johnny@ualberta.ca   at Apr 18, 2020
  callAPI = async(event) => {

    const res = await axios({
        url: 'https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyDXNsmrAD6P3W5Xq0C5UmOUl_B_KQKdDVg',
        method: 'post',
        params: {
            key: 'AIzaSyDXNsmrAD6P3W5Xq0C5UmOUl_B_KQKdDVg'
        },
        data: {
                "timeMin": event.target.start.value + ":00-0000",
                "timeMax": event.target.end.value  + ":00-0000",
                "timeZone": "America/Vancouver",
                "items": [
                  {
                    "id": event.target.guest.value
                  }
                ]
              }
    });
    console.log(JSON.stringify(res.data));
  }

}

