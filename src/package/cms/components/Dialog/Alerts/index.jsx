import * as React from 'react';
import propTypes from 'prop-types';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


/**
 * Show dialog to confirm delete
 * @param {string} title
 * @param {string} content
 * @param {func} onRemove
 * @returns {JSX.Element} Component to render
 */
const AlertsDialog = ({ title, content, onRemove }) => {
    const [open, setOpen] = React.useState(false);

    /**
     * @param {boolean} open
     */
    const handleClickOpen = () => {
        setOpen(true);
    }

    /**
     * @param {boolean} value
     */
    const handleClose = () => {
        setOpen(false);
    }
    /**
     * @param {event} event
     */
    const handelRemove = () => {
        onRemove();
        setOpen(false);
    }

    return (
        <>
            <IconButton onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handelRemove} color="primary">
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}


AlertsDialog.propTypes = {
    title: propTypes.string,
    content: propTypes.string,
    onRemove: propTypes.func,
}

AlertsDialog.defaultProps = {
    title: 'Remove Page',
    content: 'Are you sure you want to remove this page?',
    onRemove: () => { },
}

export default AlertsDialog;