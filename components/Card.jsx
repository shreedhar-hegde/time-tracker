/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fab } from "@mui/material";
import { useStopwatch } from "react-timer-hook";
import { memo, useEffect, useRef, useState } from "react";

const CardComponent = ({ task, totalTime }) => {
  const { seconds, minutes, hours, days, start, pause, isRunning } =
    useStopwatch({
      autoStart: false,
    });

  const [history, setHistory] = useState([]);

  useEffect(() => {
    totalTime(seconds);
  }, [seconds]);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const event = isRunning
      ? {
          eventType: "started at",
          time: new Date().toISOString().slice(0, 19),
        }
      : {
          eventType: "stopped at",
          time: new Date().toISOString().slice(0, 19),
        };
    setHistory((prevArray) => [...prevArray, event]);
  }, [isRunning]);

  return (
    <Card
      sx={{
        width: "90%",
        height: "20%",
        overflowY: "auto",
        display: "flex",
        margin: "2%",
        borderRadius: "25px",
        boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent
        style={{
          width: "60%",
          display: "flex",
          height: "50%",
          overflowY: "auto",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "20px", color: "rgba(0, 0, 0, 0.9)" }}
          gutterBottom
        >
          {task.text}
        </Typography>
        <div>
          {history.map((e, index) => (
            <Typography style={{ color: "rgba(0, 0, 0, 0.8)" }} key={index}>
              {e.eventType}:{e.time}
            </Typography>
          ))}
        </div>

        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
      </CardContent>

      <CardActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          float: "right",
          width: "40%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div style={{ fontSize: "30px", color: "#5056ED", opacity: 0.9 }}>
            {days}:{hours}:{minutes}:{seconds}
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {!isRunning && (
              <Button
                onClick={start}
                style={{
                  background: "#5056ED",
                  borderRadius: "50px",
                  height: "40px",
                }}
                variant="contained"
              >
                Start
              </Button>
            )}
            {isRunning && (
              <Button
                onClick={pause}
                style={{
                  background: "#ED5050",
                  borderRadius: "50px",
                  height: "40px",
                }}
                variant="contained"
              >
                Stop
              </Button>
            )}

            <Fab color="#ED5050" size="small" aria-label="remove">
              X
            </Fab>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default memo(CardComponent);
