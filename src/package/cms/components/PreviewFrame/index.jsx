import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import PostAddIcon from '@mui/icons-material/PostAdd';
// component
import Element from '../Element';

// constants && utils
import { CONTENT_TYPE, DISPLAY_TYPE, ELEMENT_TYPE } from '../../constants';
import { applyDrag, generateItems } from '../../utils';

class PreviewFrame extends Component {

    constructor(props) {
        super();
        this.state = {
            items: [{ id: 1, data: 'Hello' }],
        }
    }

    componentDidMount() { }

    handelAddElement = () => {
        if (this.state.items.length === 0) {
            this.setState({ item: this.state.items.push(ELEMENT_TYPE) })
        }
        else {
            const lastElement = this.state.items[this.state.items.length - 1];
            this.setState({ items: [...this.state.items, { id: lastElement.id ? Number(lastElement.id) + 1 : 0, content: 'Element' }] })
        }
    }

    handelRemoveElement = (id) => {
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        })
    }

    handelSavePage = () => { }

    handelCancelPage = () => { }

    render() {
        return (
            <Box sx={{}}>
                <Box sx={{
                    p: 1,
                    backgroundColor: '#fff',
                    position: 'fixed',
                    width: '100%',
                    zIndex: 2,
                    borderBottom: '1px solid #cfd7df',
                }}>
                    <IconButton
                        color="success"
                        variant="contained"
                        onClick={this.handelAddElement}
                    >
                        <PostAddIcon />
                    </IconButton>
                    <IconButton color='info' onClick={this.handelSavePage} sx={{ mr: 1 }}><SaveIcon /></IconButton>
                    <IconButton color='error' onClick={this.handelCancelPage}><CancelIcon /></IconButton>

                </Box>
                <Container style={{
                    // height: '100vh',
                    // overflowY: 'auto',
                    paddingTop: '60px',
                }} onDrop={e => this.setState({ items: applyDrag(this.state.items, e) })}>
                    {this.state.items.map(p => {
                        return (
                            <Draggable key={p.id}>
                                <ListItem key={p.data} sx={{ p: 2, margin: 'auto' }}>
                                    {/* <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}></Box>
                                        <ListItemButton>
                                            <ListItemText primary={p.data} />
                                        </ListItemButton> */}
                                    <Box sx={{ margin: 'auto' }}>
                                        <Element element={p} onRemoveElement={this.handelRemoveElement} />
                                    </Box>
                                </ListItem>
                            </Draggable>
                        )
                    })}
                </Container>
                <Box sx={{ mb: 1 }} textAlign="center">
                    <IconButton
                        color="success"
                        variant="contained"
                        onClick={this.handelAddElement}
                    >
                        <PostAddIcon />
                    </IconButton>
                </Box>
            </ Box >
        )
    }
}

PreviewFrame.propTypes = {}
PreviewFrame.defaultProps = {}


export default PreviewFrame;