import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Box, Button, Container, Fab, Grid, Modal, Stack, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {modalStyle} from "../utils";
import {FeastComponent} from "./FeastComponent";
import {Feast} from "./FeastsComponent";
import {useParams} from "react-router-dom";
import {OrdinationComponent} from "./OrdinationComponent";

export interface Ordination {
    id: number;
}


export function OrdinationsComponent() {

    const {feastId} = useParams();

    const [feast, setFeast] = useState<Feast | null>(null);
    const [addingOrdination, setAddingOrdination] = useState(false);

    const reload = useCallback(() => {
        axios.get(`/api/feasts/${feastId}`)
            .then(result => {
                setFeast(result.data);
            })
    }, []);

    useEffect(() => {
        reload();
    }, [reload]);

    return <Container>
        <Stack spacing={2}>
            <Grid container spacing={2}>
                {feast?.ordinations?.map(ordination => (
                    <Grid item xs={3}>
                        <OrdinationComponent feast={{id: parseInt(feastId!)}} ordination={ordination}
                                             onDelete={() => reload()}/>
                    </Grid>
                ))}
            </Grid>
            <Fab><AddIcon onClick={() => setAddingOrdination(true)}/></Fab>
        </Stack>
        {/*<Modal*/}
        {/*    open={addingFeast}*/}
        {/*    onClose={() => setAddingFeast(false)}*/}
        {/*>*/}
        {/*    <Box sx={modalStyle}>*/}
        {/*        <Stack spacing={1}>*/}
        {/*            <TextField label="nome"*/}
        {/*                       variant="outlined"*/}
        {/*                       value={feastName}*/}
        {/*                       onChange={evt => setFeastName(evt.target.value)}></TextField>*/}
        {/*            <Button variant="outlined" onClick={addFeast}>Ok</Button>*/}
        {/*        </Stack>*/}
        {/*    </Box>*/}
        {/*</Modal>*/}

    </Container>;
}
