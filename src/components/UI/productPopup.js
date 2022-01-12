import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import './util.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal(props) {
  const {showProductPopup, setShowProductPopup, selectedProduct} = props;
  const handleOpen = () =>{
    setShowProductPopup(true);
  };
  const handleClose = () => {
    setShowProductPopup(false);
  };

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showProductPopup}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showProductPopup}>
          <Box sx={style}>
            <div className = 'product-header'>
                <img src = {selectedProduct.image} height='250px' width='250px'/>
                <Typography id="transition-modal-title" variant="h6" component="h6">
                {selectedProduct.title}
                </Typography>
            </div>
            <div className = 'product-desc'>
                <div>Description</div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {selectedProduct.description}
            </Typography>
            </div>
          </Box>
        </Fade>
      </Modal>
  );
}