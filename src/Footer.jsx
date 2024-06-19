import { Grid, Typography } from "@mui/material";
function Footer() {
  return (
    <Grid
      container
      bgcolor={"black"}
      color={"White"}
      justifyContent={"center"}
      position={"fixed"}
      bottom={0}
      width={"100%"}
      py={2}
    >
      <Grid item>
        <Typography>&copy; 2024, Designed By Aakash</Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
