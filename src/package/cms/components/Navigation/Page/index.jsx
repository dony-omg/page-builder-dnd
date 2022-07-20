import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import WebIcon from '@mui/icons-material/Web';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// components
import CreatePageForm from "../../Form/CreatePage";
import AlertsDialog from '../../Dialog/Alerts';

const CreatePageListItem = () => {
    const [isCreate, setIsCreate] = React.useState(false);

    const handelShowCreate = () => {
        setIsCreate(true);
    }

    const handelHideCreate = () => {
        setIsCreate(false);
    }

    return isCreate ? (
        <CreatePageForm isCreate={isCreate} onClose={handelHideCreate} />
    ) : (
        <>
            <ListItem>
                <ListItemButton onClick={handelShowCreate} sx={{
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
        </>
    )
}


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export function Page() {
    const [dense, setDense] = React.useState(false);

    return (
        <div>
            <Demo>
                <List dense={dense}>
                    {generate(
                        <ListItem
                            secondaryAction={
                                <AlertsDialog content={'Are you sure you want to remove this page?'} />
                            }
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <WebIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Home"
                                />
                            </ListItemButton>
                        </ListItem>,
                    )}
                    <CreatePageListItem />
                </List>
            </Demo>
        </div>
    )
}