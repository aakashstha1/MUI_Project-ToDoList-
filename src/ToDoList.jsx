import { useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Button,
  TextField,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function OrderedList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem disablePadding sx={{ display: "list-item" }} key={index}>
          <ListItemButton onClick={() => toggleTaskCompletion(index)}>
            <ListItemIcon>
              <IconButton
                edge="start"
                aria-label="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(index);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText
              primary={
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
              }
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontSize: "0.8rem", float: "right" }}
                >
                  {task.timestamp}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

OrderedList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

function ToDoList() {
  // Load tasks from localStorage when the component initializes
  const loadTasksFromLocalStorage = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks || [];
  };

  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());
  const [taskInput, setTaskInput] = useState("");

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleAddTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        text: taskInput,
        timestamp: new Date().toLocaleString(),
        completed: false,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);
      setTaskInput("");
    }
  };

  const handleDeleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleToggleTaskCompletion = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const totalTasks = tasks.length;
  const tasksLeft = tasks.filter((task) => !task.completed).length;

  return (
    <Stack
      spacing={3}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={6}
      sm={8}
    >
      <Grid container justifyContent={"center"}>
        <Grid
          item
          md={5}
          xs={10}
          sm={8}
          height={500}
          bgcolor={"#283448"}
          borderRadius={4}
          px={8}
          py={2}
        >
          <Grid item display={"flex"} justifyContent={"space-between"}>
            <TextField
              id="standard-basic"
              placeholder="Enter a task..."
              autoComplete="off"
              variant="standard"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyPress={handleKeyPress}
              InputProps={{
                sx: {
                  width: "380px",
                  color: "#fff",
                  "&:before": { borderBottomColor: "#fff" },
                  "&:after": { borderBottomColor: "#fff" },
                },
              }}
            />
            <Button variant="contained" onClick={handleAddTask}>
              Add Task
            </Button>
          </Grid>

          <Grid item mt={3} display={"flex"} justifyContent={"space-between"}>
            <Typography color="white">Total Tasks: {totalTasks}</Typography>
            <Typography color="white">Tasks Left: {tasksLeft}</Typography>
          </Grid>
          <Grid
            item
            bgcolor={"#C0D6E8"}
            width="100%"
            height={300}
            mt={3}
            borderRadius={4}
            overflow="auto"
          >
            <OrderedList
              tasks={tasks}
              toggleTaskCompletion={handleToggleTaskCompletion}
              deleteTask={handleDeleteTask}
            />
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default ToDoList;
