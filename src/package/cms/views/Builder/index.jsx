import React, { useState } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PreviewFrame from '../../components/PreviewFrame';

import { RootMenu, PageMenu } from '../../components/Navigation';

function Builder() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <RootMenu />
                    </Grid>
                    <Grid item xs={3}>
                        <Box component={'main'} sx={{ p: 2, border: '1px dashed grey' }}>
                            <PageMenu />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box bgcolor={'grey'}>
                            <PreviewFrame />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
};

Builder.propTypes = {};
Builder.defaultProps = {};
export default Builder;