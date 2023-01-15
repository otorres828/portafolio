import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import github from "../images/icons/github.png";
import whatsapp from "../images/icons/icons8-whatsapp.svg";
import gmail from "../images/icons/gmail_144.svg";

export default function Redes() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        variant="outlined"
        onClick={handleClickOpen}
        className="cursor-pointer ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
      >
        Redes
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            <div className="text-2xl text-teal-900 font-bold text-center">
            Contactame!
            </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="container mx-auto">
              <div className="flex justify-center">
                <div>
                  <a href="https://wa.me/584148848537">
                    <img src={whatsapp} />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/otorres828">
                  
                  <img className="opacity-80" src={github} />
                  </a>
                </div>
                <div >
                  <a href="mailto:olivertorres1997@gmail.com">
                    <img src={gmail} />
                  </a>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="bg-green-500 font-semibold rounded-lg p-3 text-white cursor-pointer" onClick={handleClose}>Cerrar</div>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
