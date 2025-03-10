import { useEffect, useState } from "react";
import styles from "./Calendar.module.css";

const Calendar = () => {
  const [calendar, setCalendar] = useState(undefined);
  useEffect(() => {
    //TODO: fetch calendar
    fetch("")
      .then((res) => res.json())
      .then((json) => setCalendar(json));
  }, []);

  if (!calendar) return <p>Loading...</p>;

  return (
    <div className={styles.calendar_container}>
      {
        //TODO: loop on selected users
      }
    </div>
  );
};

export default Calendar;
