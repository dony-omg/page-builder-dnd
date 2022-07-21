import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import WebIcon from '@mui/icons-material/Web';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
// components
import CreatePageForm from "../../Form/CreatePage";
import { Box, IconButton, Typography } from '@mui/material';

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
    return [0, 1, 2, 3].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.grey,
}));

export function Page() {
    const [dense, setDense] = React.useState(false);

    return (
        <div>
            <Demo>
                <Typography variant='h5' mb={2}>Page Management</Typography>
                <CreatePageListItem />
                <List dense={dense}>
                    {generate(
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <WebIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="home_page_name"
                                />
                            </ListItemButton>
                        </ListItem>,
                    )}
                </List>
            </Demo>
        </div>
    )
}

Page.propTypes = {};
Page.defaultProps = {};