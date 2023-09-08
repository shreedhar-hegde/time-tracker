/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext, useState } from "react";
import { TasksContext } from "../src/TasksContext";

export default function DialogComponent({ open, onClose, setOpen }) {
  const [newTask, setNewTask] = useState("");
  const { addTask } = useContext(TasksContext);

  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const addNewTask = () => {
    setOpen(false);
    addTask({ taskId: "taskId", text: newTask });
    setNewTask("");
  };

  return (
    <div>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
        <DialogTitle>Enter the Task Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            style={{ height: "40px" }}
            margin="dense"
            type="text"
            fullWidth
            id="outlined-basic"
            variant="outlined"
            value={newTask}
            onChange={handleNewTask}
          />
        </DialogContent>
        <DialogActions>
          <div style={{ flex: "1 0 0" }}>
            <Button
              variant="contained"
              style={{ borderRadius: "50px" }}
              onClick={addNewTask}
            >
              Save
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
