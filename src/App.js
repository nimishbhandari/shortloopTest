import Hour from "./component/Hour";
import Meet from "./component/Meet";
import { day } from "./config/Day";
import { meeting } from "./config/meetings";

const App = () => {
  const meetings = meeting.meetings;
  const hourly = day;

  return (
    <div>
      {hourly.map((elem, i) => {
        return <Hour key={i} hour={elem} />;
      })}

      {meetings.map((elem, i) => {
        return (
          <Meet
            key={i}
            start={elem.startTime}
            end={elem.endTime}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default App;
