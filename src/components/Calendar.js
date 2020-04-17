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
    ],
    available_times: []
  }


  render() {
    return (
      <div className='demo-app'>
        <div className='demo-app-top'>
          <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
        </div>
        <table>
        <tr>
        <td>
        <h3>Find Available Time</h3>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
          <table>
            <tr>
              <td>
                <label for="title">Start Time:</label>
              </td>
              <td>
                <input type="datetime-local" id="start" name="start" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="end">End Time:</label> </td>
              <td>
                <input type="datetime-local" id="end" name="end" /></td></tr>

            <tr>
              <td>
                <label for="host">Host Email:</label></td>
              <td>
                <input type="text" name="host"
                  placeaholder="add todo .."
                  style={{ flex: '10' }}
                /></td></tr>
            <tr>
              <td>
                <label for="guest">Guest Email:</label>
              </td>
              <td>
                <input type="text" name="guest"
                  placeaholder="add todo .."
                  style={{ flex: '10' }}
                />
              </td>
            </tr>
            
            <input
              type="submit"
              value="Submit"
              className="btn"
              style={{ flex: '1' }}

            />
          </table>
        </form>
        <div>
          <h3>Available Times:</h3> {this.state.available_times.map(txt => <p><h4>{txt}</h4></p>)}
        </div>
        <h3>Create Event</h3>
        <form onSubmit={this.createEvent} style={{ display: 'flex' }}>
          <table>
            <tr>
              <td>
                <label for="title">Event Title:</label>
              </td>
              <td>
                <input type="text"
                  name="title"
                /> </td>
            </tr>
            <tr>
              <td>
                <label for="zoom">Zoom Link:</label>
              </td>
              <td>
                <input type="text"
                  name="zoom"
                  placeaholder="add todo .."
                  style={{ flex: '10' }}
                /></td>
            </tr>
            <tr>
              <td><label for="meeting_start_time">Start Time:</label></td>
              <td> <input type="datetime-local" id="meeting_start_time"
                name="meeting-start-time"></input></td>
            </tr>
            <tr><td>
              <label for="meeting_end_time">End Time:</label></td>

              <td><input type="datetime-local" id="meeting_end_time"
                name="meeting-start-time"
              ></input></td></tr>

            <input
              type="submit"
              value="Submit"
              className="btn"
            />
          </table>
        </form>
        </td>
          <td>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[dayGridPlugin, timeGridPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
        </td>

        </tr>
        </table>
      </div>
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.callAPI(event);
  }

  createEvent = (event) => {
    event.preventDefault();
    console.log("creating new event")
    var title = event.target.title.value
    var start = Date.parse(event.target.meeting_start_time.value)
    var end = Date.parse(event.target.meeting_end_time.value)
    // var host = event.target.host.value
    // var guest = event.target.guest.value
    // var desc = event.target.description.value
    this.setState({  // add new event data
      calendarEvents: this.state.calendarEvents.concat({ // creates a new array
        title: title,
        start: start,
        end: end,
        url: "https://zoom.us/j/98780425247"
      })
    })
  }

  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  // test with bobtestpizza001@gmail.com  and  johnny@ualberta.ca   at Apr 18, 2020
  callAPI = async (event) => {

    const res = await axios({
      url: 'https://www.googleapis.com/calendar/v3/freeBusy?key=AIzaSyDXNsmrAD6P3W5Xq0C5UmOUl_B_KQKdDVg',
      method: 'post',
      params: {
        key: 'AIzaSyDXNsmrAD6P3W5Xq0C5UmOUl_B_KQKdDVg'
      },
      data: {
        "timeMin": event.target.start.value + ":00-0000",
        "timeMax": event.target.end.value + ":00-0000",
        "timeZone": "America/Vancouver",
        "items": [
          {
            "id": event.target.host.value,
          },
          {
            "id": event.target.guest.value
          }
        ]
      }
    });
    console.log(JSON.stringify(res.data));
    this.findAvailable(res.data)
  }

  findAvailable = (r) => {
    var p = r['calendars']
    var meetings = []
    for (var key in p) {
      if (p.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
        var time = p[key]['busy']
        for (var t in time) {
          if (time.hasOwnProperty(t)) {
            console.log(t + " start-> " + time[t]['start']);
            console.log(t + " end-> " + time[t]['start']);
            meetings.push({
              "start_time": time[t]['start'].substring(11, 19),
              "end_time": time[t]['end'].substring(11, 19)
            })

          }
        }
      }
    }
    function subtractMinute(time) {
      var h = +time.substr(0, 2);
      var m = +time.substr(3, 2);

      if (m > 0) {
        m -= 1;
      } else {
        if (h > 0) {
          h -= 1;
        } else {
          return false;
        }
        m = 59;
      }

      if (h < 10)
        h = '0' + h;

      if (m < 10)
        m = '0' + m;

      return h + ':' + m + ':00';
    }

    function addMinute(time) {
      var h = +time.substr(0, 2);
      var m = +time.substr(3, 2);

      if (m < 59) {
        m += 1;
      } else {
        if (h < 22) {
          h += 1;
        } else {
          return false;
        }
        m = 0;
      }

      if (h < 10)
        h = '0' + h;

      if (m < 10)
        m = '0' + m;

      return h + ':' + m + ':00';
    }

    meetings.sort(function (a, b) {
      return a.start_time > b.start_time ? 1 : -1;
    });

    var schedule = [];
    var start_time = '00:00:00';
    var end_time = '23:59:00';
    for (var i = 0, l = meetings.length; i < l; i++) {
      end_time = subtractMinute(meetings[i].start_time);

      if (i)
        start_time = addMinute(meetings[i - 1].end_time);

      if ((end_time && !i) || (end_time && i && meetings[i - 1].end_time < meetings[i].start_time))
        schedule.push({ meeting: 'free time', start_time: start_time, end_time: end_time });

      if (i + 1 === l) {
        start_time = addMinute(meetings[i].end_time);

        if (start_time)
          schedule.push({ meeting: 'free time', start_time: start_time, end_time: '23:59:00' });
      }
    }
    console.log(schedule);
    var message = ""
    for (var t of schedule) {
      console.log(t)
      message = "Avaiable between: " + t['start_time'] + " and " + t['end_time']
      this.setState({
        available_times: this.state.available_times.concat(message)
      })
    }

  }

}

