import { Box } from "@mantine/core";
import "./Footer.css";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <Box id="footer">
      <div className="container">
        <Typography variant="h5">SDU EVENTS</Typography>
        <div className="footer-contacts">
          <Typography variant="h6">Contacts:</Typography>
          <p>*77878787878</p>
        </div>
      </div>
    </Box>
  );
};
