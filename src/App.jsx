import { Fab } from "@mui/material";
import AppBarComponent from "../components/AppBar";
import CardComponent from "../components/Card";
import { Add } from "@material-ui/icons";
import "./index.css";
import DialogComponent from "../components/Dialog";
import { useContext, useState } from "react";
import { TasksContext } from "./TasksContext";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [totalTime, setTotalTime] = useState(0);

  const { tasks } = useContext(TasksContext);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const setOpen = () => {
    setIsDialogOpen(false);
  };

  const updateTotalTime = () => {
    setTotalTime((prevTotal) => prevTotal + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div>
        <AppBarComponent seconds={totalTime - 4} style={{ height: "20%" }} />
      </div>

      <div
        style={{
          marginTop: "2%",
          height: "70vh",
          maxHeight: "70vh",
          width: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          alignContent: "space-evenly",
          justifyContent: "space-around",
          overflow: "auto",
        }}
      >
        <div
          style={{
            height: "90%",
            width: "90%",
            minHeight: "min-content",
          }}
        >
          {tasks.map((ele) => (
            <CardComponent
              totalTime={updateTotalTime}
              key={ele.taskId}
              task={ele}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          height: "10%",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <Fab
          onClick={openDialog}
          style={{ color: "white", float: "right", background: "#5056ED" }}
          aria-label="add"
        >
          <Add />
        </Fab>
      </div>

      <DialogComponent
        open={isDialogOpen}
        onClose={closeDialog}
        setOpen={setOpen}
      />
    </div>
  );
}

export default App;
