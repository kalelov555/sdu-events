import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Events.css";
import { Event } from "../Event/Event";

export const Events = () => {
  return (
    <div
      className="events-container"
      style={{ marginTop: "20px" }}>
      <Typography variant="h5">Events</Typography>

      <Box className="events">
        <Event />
        <Event />
        <Event />
      </Box>
    </div>
  );
};
