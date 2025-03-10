import { useEffect, useState, MouseEvent } from "react";

type Calendar = {
  id: string;
  name: string;
};

type Event = {
  start: {
    dateTime: string;
    timeZone: string;
  };
  id: string;
  subject: string;
};

function Calendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [calendars, setCalendars] = useState<Calendar[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/calendars")
      .then((response) => response.json())
      .then((json) => {
        setCalendars(json.value);
      })
      .catch((error) => {
        console.error(error);
      });
    fetch("http://localhost:4000/calendars/events")
      .then((response) => response.json())
      .then((json) => {
        setEvents(json.value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch("http://localhost:4000/calendars/events", {
      method: "POST",
    });
  };

  return (
    <div>
      <h1>All Calendars</h1>
      {calendars.map((calendar) => {
        console.log(calendar);
        return <li key={calendar.id}>{calendar.name}</li>;
      })}
      <h1>Calendar Events</h1>
      <ul>
        {events.map((event) => {
          console.log(event);
          return (
            <li key={event.id}>
              {event.subject} - {event.start.dateTime}
            </li>
          );
        })}
      </ul>
      <button onClick={handleButtonClick}>Create event</button>
    </div>
  );
}

export default Calendar;
