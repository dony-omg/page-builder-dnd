import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export function Root() {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    {/* <ListItemText primary="Pages" /> */}
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    {/* <ListItemText primary="Inspection" /> */}
                </ListItemButton>
            </ListItem>
        </List>
    )
}

Root.defaultProps = {}