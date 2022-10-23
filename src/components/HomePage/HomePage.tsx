import { useState } from "react";
import { Footer } from "../Footer/Footer";
import Typography from "@mui/material/Typography";
import Header from "../Header/Header";
import { InstructionsModal } from "../Modal/Modal";
import Button from "@mui/material/Button";
import { Events } from "../Events/Events";

export const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="homepage">
      <Header />

      <div className="banner">
        <div className="article">
          <Typography variant="h4">Home Page</Typography>
          <Typography style={{ width: "75%" }} variant="h6">
            This website allows you to track events that
            passed or going to be provided in SDU
          </Typography>
        </div>
        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          onClick={handleOpen}>
          Instructions
        </Button>
        <InstructionsModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        />
      </div>

      <Events />

      <Footer />
    </div>
  );
};
