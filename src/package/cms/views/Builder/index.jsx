import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// components
import PreviewFrame from '../../components/PreviewFrame';
import { PageMenu } from '../../components/Navigation';

function Builder() {
    return (
        <Container maxWidth="sx">
            <Grid container>
                <Grid item
                    sx={{
                        p: 2,
                        border: '1px solid #cfd7df',
                        width: '340px',
                        display: 'inline-block',
                        position: 'absolute',
                        bottom: 0,
                        top: '65px',
                        overflowY: 'auto',
                        left: 0,
                    }}>
                    <PageMenu />
                </Grid>
                <Grid sx={{
                    right: 0,
                    position: 'absolute',
                    left: '340px',
                    bottom: 0,
                    top: '65px',
                    backgroundColor: '#ebeff3',
                    overflowY: 'auto',
                    border: '1px solid #cfd7df'
                }}>
                    <PreviewFrame />
                </Grid>
            </Grid>
        </Container >
    )
};

Builder.propTypes = {};
Builder.defaultProps = {};

export default Builder;