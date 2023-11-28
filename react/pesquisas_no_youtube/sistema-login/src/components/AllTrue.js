import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function AllTrue() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [resultado, setResultado] = useState(null);

  function consulta() {
    const apiUrl = 'https://chat.conexaoia.digital/enviar_true';
        const contentType = 'application/json';
        const senhaAPI = 'F14C7D7625414A3E5DA1811349667';

      

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': contentType,
                'X-API-KEY': senhaAPI
            },
           
        })
        .then(response => response.json()) // Parse da resposta para JSON
        .then(result => {
            console.log(result);
            const { token } = result;
            const [, payloadEncoded] = token.split('.');
            const payloadDecoded = atob(payloadEncoded);
            console.log('Conteúdo do Payload:', payloadDecoded);
            setResultado(payloadDecoded);
            // Faça o que precisa com o payload decodificado
            handleOpen()
            
        })
        .catch(error => {
            console.error('Erro:', error);
        });
        
    
  }

  return (
    <>
      
      <Button onClick={consulta}>Open modal</Button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Resultado da Requisição
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {resultado ? JSON.stringify(resultado) : 'Aguardando resultado...'}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default AllTrue;
