import * as React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Container, Draggable } from 'react-smooth-dnd';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { CONTENT_TYPE, DISPLAY_TYPE } from '../../constants';



function generateSelect(select) {
    return select.map((item, index) =>
        <MenuItem key={index} value={item?.value}>{item.label}</MenuItem>
    )
}

function Element() {
    const [isEdit, setIsEdit] = React.useState(false);
    const [contentType, setContentType] = React.useState('');
    const [displayType, setDisplayType] = React.useState('');
    const [keyCode, setKeyCode] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeContentType = (event) => {
        setContentType(event.target.value);
    };

    const handleChangeDisplayType = (event) => {
        setDisplayType(event.target.value);
    };

    const handleChangeKeyCode = (event) => {
        setKeyCode(event.target.value);
    };

    const handelEnableEdit = () => {
        setIsEdit(true);
        setAnchorEl(false);
    }

    const handelEditCancel = () => {
        setIsEdit(false);
    }

    const handelSave = () => {
        setIsEdit(false);
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
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="edit-menu"
                            aria-labelledby="edit-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handelEnableEdit}>Edit</MenuItem>
                            <MenuItem onClick={handleClose}>Remove</MenuItem>
                        </Menu>
                    </div>
                }
                title="Section"
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
            {isEdit && (
                <CardActions>
                    <Button size="small" onClick={handelSave}>Save</Button>
                    <Button size="small" onClick={handelEditCancel}>Cancel</Button>
                </CardActions>
            )}

        </Card>
    )
}

Element.prototype = {};
Element.defaultProps = {};

export default Element;