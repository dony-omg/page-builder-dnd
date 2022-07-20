import * as React from 'react';
import propTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import PostAddIcon from '@mui/icons-material/PostAdd';

function CreatePageForm() {
    const [isCreate, setIsCreate] = React.useState(false);
    return (
        <ListItem>
            <ListItemButton sx={{
                border: '1px dashed #e0e0e0',
            }}>
                <ListItemIcon>
                    <PostAddIcon />
                </ListItemIcon>
                <ListItemText
                    primary="Add New Page"
                />
            </ListItemButton>
        </ListItem>
    )
}

CreatePageForm.propTypes = {};
CreatePageForm.defaultProps = {};

export default CreatePageForm;