import React, { useState } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Simple from './components/SimpleSortTable/index'
import DragDropMenu from './components/Menu'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



function App() {

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <DragDropMenu />
                    </Grid>
                    <Grid item xs={4}>
                        <Simple />
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </Container>
            <Copyright />
        </Box>
    )
}

export default App
