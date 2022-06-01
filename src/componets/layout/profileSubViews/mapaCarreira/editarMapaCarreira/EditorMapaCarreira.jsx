
import React, {useState} from "react";
import Menu from "../../../Menu";
import MenuMobile from "../../../MenuMobile";

//imports do bootstrap
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



import "./EditorMapaCarreira.css"

const EditorMapaCarreira = props => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Menu/>
            <div className="EditorMapaCarreira">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://media.correiodocidadao.com.br/2021/02/e2b0c51a-01.png"
                        alt="green iguana"
                    />
                    <CardContent>
                       <span>Dale dale</span>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small" onClick={handleOpen}>Learn More</Button>
                    </CardActions>
                </Card>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>

                <Stack sx={{ width: '20%' }} spacing={2}>
                    <Alert severity="error">This is an error alert — check it out!</Alert>
                    <Alert severity="warning">This is a warning alert — check it out!</Alert>
                    <Alert severity="info">This is an info alert — check it out!</Alert>
                    <Alert severity="success">This is a success alert — check it out!</Alert>
                </Stack>
            </div>
            <MenuMobile/>
        </>
    );
}

export default EditorMapaCarreira;