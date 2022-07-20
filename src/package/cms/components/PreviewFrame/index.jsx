import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box'

import { applyDrag, generateItems } from '../../utils';

import Element from '../Element';

class PreviewFrame extends Component {
    constructor() {
        super();
        this.state = {
            items: generateItems(10, (index) => {
                return {
                    id: index,
                    data: 'Draggable' + index
                }
            })
        }
    }

    render() {
        return (
            <div>
                <div className="simple-page">
                    <Container onDrop={e => this.setState({ items: applyDrag(this.state.items, e) })}>
                        {this.state.items.map(p => {
                            return (
                                <Draggable key={p.id}>
                                    <ListItem key={p.data} sx={{ p: 2, border: '1px dashed grey', margin: 'auto' }}>
                                        {/* <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}></Box>
                                        <ListItemButton>
                                            <ListItemText primary={p.data} />
                                        </ListItemButton> */}
                                        <Box sx={{ margin: 'auto' }}>
                                            <Element />
                                        </Box>
                                    </ListItem>
                                </Draggable>
                            )
                        })}
                    </Container>
                </div>
            </div>
        )
    }
}


export default PreviewFrame;