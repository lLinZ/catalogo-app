import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const FooterComponent: FC = (): ReactElement => {
    return (
        <Box
            sx={{
                width: "100wv",
                height: "auto",
                backgroundColor: "primary.main",
                padding: "2rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="white" variant="h5">
                            Catalogo App
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="text.secondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | All rights reserved`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
