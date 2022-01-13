import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
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
                <div>
                  <img src = {selectedProduct.image} alt = ''/>
                </div>
                <div className = 'product-header-text'>
                  <Typography id="transition-modal-title">
                  {selectedProduct.title}
                  </Typography>
                  {Object.keys(selectedProduct).length &&<Rating name="read-only" value={selectedProduct.rating.rate} precision ={0.5} readOnly />}
                  <Typography>&#8377;&nbsp;<b>{(Math.round(selectedProduct.price * 700) / 10).toLocaleString('en-US')}</b></Typography>
                </div>
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