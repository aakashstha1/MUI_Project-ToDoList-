import { Grid, Typography } from "@mui/material";
function Header() {
  return (
    <Grid
      container
      bgcolor={"#03AED2"}
      py={2}
      color={"White"}
      justifyContent={"center"}
      position={"sticky"}
      width={"100%"}
    >
      <Grid item>
        <Typography variant="h3" fontWeight={"bold"} color={"white"}>
          To-Do-List
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
