import React, { useState } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Simple from './components/SimpleSortTable/index'
import DragDropMenu from './components/Section/Menu'
import PageListSection from './components/Section/PageList';


function App() {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <DragDropMenu />
                    </Grid>
                    <Grid item xs={4}>
                        <Box component={'main'} sx={{ p: 2, border: '1px dashed grey' }}>
                            <PageListSection />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor={'grey'}>
                            <Simple />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default App
