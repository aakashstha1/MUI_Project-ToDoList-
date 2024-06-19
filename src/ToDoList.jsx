import React from "react";
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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Padding } from "@mui/icons-material";

function OrderedList() {
  return (
    <List>
      <ListItem disablePadding sx={{ display: "list-item" }}>
        <ListItemButton>
          <ListItemIcon>
            <IconButton edge="start" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Task" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: "list-item" }}>
        <ListItemButton>
          <ListItemIcon>
            <IconButton edge="start" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Another Task" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: "list-item" }}>
        <ListItemButton>
          <ListItemIcon>
            <IconButton edge="start" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Yet Another Task" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

function ToDoList() {
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
          <Grid item>
            <TextField
              id="standard-basic"
              label="Enter a task..."
              variant="standard"
              fullWidth
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                sx: {
                  color: "#fff",
                  "&:before": { borderBottomColor: "#fff" },
                  "&:after": { borderBottomColor: "#fff" },
                },
              }}
            />
          </Grid>
          <Grid item mt={2} display={"flex"} justifyContent={"center"}>
            <Button variant="contained">Add Task</Button>
          </Grid>
          <Grid
            item
            bgcolor={"#C0D6E8"}
            width="100%"
            height={300}
            mt={5}
            borderRadius={4}
            overflow="auto"
          >
            <OrderedList />
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default ToDoList;
