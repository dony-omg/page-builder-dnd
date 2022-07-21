import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Container, Draggable } from 'react-smooth-dnd';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TextField from '@mui/material/TextField';

// component
import Element from '../Element';
import AlertsDialog from '../Dialog/Alerts';
// constants && utils
import { CONTENT_TYPE, DISPLAY_TYPE, ELEMENT_TYPE } from '../../constants';
import { applyDrag, generateItems } from '../../utils';
import { Typography } from '@mui/material';

class PreviewFrame extends Component {

    constructor(props) {
        super();
        this.state = {
            items: [{ id: 1, data: 'Hello' }],
            isEdit: false,
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

    handelEditPage = () => {
        this.setState({ isEdit: true })
    }

    handelSavePage = () => {
        this.setState({ isEdit: false })
    }

    handelCancelPage = () => {
        this.setState({ isEdit: false })
    }

    onChangeEditNamePage = (e) => {

    }

    render() {
        const { isEdit } = this.state;

        return (
            <Box>
                <Box sx={{
                    p: 1,
                    backgroundColor: '#fff',
                    width: '100%',
                    zIndex: 2,
                    borderBottom: '1px solid #cfd7df',
                }}>
                    <Grid container spacing={1} alignContent="baseline" justifyContent="space-between" value={'home_page_name'}>
                        <Grid item>
                            {isEdit ? (
                                <TextField
                                    id="edit-name-pate-text-field"
                                    label="Edit name page"
                                    variant="standard"
                                    defaultValue={'home_page_name'}
                                />
                            ) : (
                                <Typography variant='h6'>
                                    home_page_name
                                </Typography>
                            )}

                        </Grid>
                        <Grid item>
                            {isEdit ? (
                                <>
                                    <IconButton
                                        color="success"
                                        variant="contained"
                                        onClick={this.handelAddElement}
                                    >
                                        <PostAddIcon />
                                    </IconButton>
                                    <IconButton color='info' onClick={this.handelSavePage} sx={{ mr: 1 }}><SaveIcon /></IconButton>
                                    <IconButton color='error' onClick={this.handelCancelPage}><CancelIcon /></IconButton></>
                            ) : (
                                <>
                                    <IconButton
                                        variant="contained"
                                        onClick={this.handelEditPage}
                                    >
                                        <BorderColorIcon />
                                    </IconButton>
                                    <AlertsDialog content={'Are you sure you want to remove this page?'} />
                                </>
                            )}
                        </Grid>
                    </Grid>


                </Box>
                <Container
                    style={{
                        paddingTop: '60px',
                    }}
                    onDrop={e => this.setState({ items: applyDrag(this.state.items, e) })}
                >
                    {this.state.items.map(p => {
                        return (
                            <Draggable key={p.id}>
                                <ListItem key={p.data} sx={{ p: 2, margin: 'auto' }}>
                                    <Box sx={{ margin: 'auto' }}>
                                        <Element element={p} onRemoveElement={this.handelRemoveElement} isEdit={isEdit} />
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