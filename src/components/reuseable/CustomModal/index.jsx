import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'Min(330px, 90%)',
  bgcolor: 'background.paper',
  border: '1px solid grey',
  boxShadow: 24,
  p: 2,
  boxSizing: 'border-box'
};

const CustomModal = ({ children, open, closeModal, ...others }) => {

  const handleClose = () => closeModal(false);

  return <Modal
        open={open}
        onClose={handleClose}
        {...others}
    >
        <Box sx={style}>
            {children}
        </Box>
    </Modal>;
}

export default CustomModal;
