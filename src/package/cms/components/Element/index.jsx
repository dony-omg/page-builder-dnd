import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MenuItem from '@mui/material/MenuItem';

import { CONTENT_TYPE, DISPLAY_TYPE } from '../../constants';

function generateSelect(select) {
    return select.map((item, index) =>
        <MenuItem key={index} value={item?.value}>{item.label}</MenuItem>
    )
}

function Element({ onRemoveElement, onEditElement, element, isEdit }) {
    const [contentType, setContentType] = React.useState('');
    const [displayType, setDisplayType] = React.useState('');
    const [keyCode, setKeyCode] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);


    const handleChangeContentType = (event) => {
        setContentType(event.target.value);
    };

    const handleChangeDisplayType = (event) => {
        setDisplayType(event.target.value);
    };

    const handleChangeKeyCode = (event) => {
        setKeyCode(event.target.value);
    };


    const handelRemove = () => {
        onRemoveElement(element.id);
    }

    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardHeader
                action={
                    <div>
                        <IconButton
                            id="edit-menu-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={() => { handelRemove(element?.id) }}
                            disabled={!isEdit}
                        >
                            <DeleteOutlineIcon />
                        </IconButton>
                    </div>
                }
                title={`Section ${element.id}`}
            />
            <CardContent>
                <Box>
                    <FormControl fullWidth disabled={!isEdit}>
                        <InputLabel labelId="contentType">Content Type</InputLabel>
                        <Select
                            labelId="contentType"
                            id="contentType"
                            value={contentType}
                            label="Content Type"
                            onChange={handleChangeContentType}
                            size="small"
                        >
                            {generateSelect(CONTENT_TYPE)}
                        </Select>
                    </FormControl>
                </Box>
                <Divider sx={{
                    my: 2
                }} />
                <Box sx={{ mb: 2 }}>
                    <FormControl fullWidth disabled={!isEdit}>
                        <InputLabel id="displayType">Display type</InputLabel>
                        <Select
                            labelId="displayType"
                            id="displayType"
                            value={displayType}
                            label="Age"
                            onChange={handleChangeDisplayType}
                            size="small"
                        >
                            {generateSelect(DISPLAY_TYPE)}
                        </Select>
                    </FormControl>
                </Box>
                <Divider sx={{
                    my: 2
                }} />
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField disabled={!isEdit} fullWidth label="Key code" id="keyCode" size="small" onChange={handleChangeKeyCode} value={keyCode} />
                </Box>

            </CardContent>
        </Card>
    )
}

Element.propTypes = {
    isEdit: PropTypes.bool,
    element: PropTypes.object,
    onRemoveElement: PropTypes.func,
    onEditElement: PropTypes.func,
};
Element.defaultProps = {
    isEdit: false,
    element: {},
    onRemoveElement: () => { },
    onEditElement: () => { }
};

export default Element;