import * as React from 'react';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function CreatePageForm({ isCreate, onClose }) {
    const [namePage, setNamePage] = React.useState('');

    /**
     * @param {event} event
     */
    const handelSave = () => {
        onClose();
    }

    /**
     * @param {event} event
     */
    const handelEditCancel = () => {
        onClose()
    }

    /**
     * 
     * @param {*} event
     */
    const onChangeNamePage = (event) => {
        setNamePage(event.target.value);
    }

    return isCreate ? (
        <Box
            component="form"
            sx={{
                border: '1px dashed #e0e0e0'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="name-page-text-field" fullWidth size='small' label="Name Page" variant="filled" value={namePage} onChange={onChangeNamePage} />
            <Box sx={{ my: 1, px: 1 }}>
                <Button size="small" onClick={handelSave}>Save</Button>
                <Button size="small" onClick={handelEditCancel}>Cancel</Button>
            </Box>
        </Box>
    ) : <></>
}

CreatePageForm.propTypes = {
    isCreate: propTypes.bool.isRequired,
    onClose: propTypes.func.isRequired
};
CreatePageForm.defaultProps = {
    isCreate: false,
    onClose: () => { }
};

export default CreatePageForm;