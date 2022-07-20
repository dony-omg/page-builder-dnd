import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import WebIcon from '@mui/icons-material/Web';
// components
import CreatePageForm from "../../Form/CreatePage";


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
                        <ListItem>
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
                    <CreatePageForm />
                </List>
            </Demo>
        </div>
    )
}