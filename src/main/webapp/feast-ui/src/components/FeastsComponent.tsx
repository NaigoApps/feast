import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Box, Button, Container, Fab, Grid, Modal, Stack, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {modalStyle} from "../utils";
import {FeastComponent} from "./FeastComponent";

export interface Feast {
    id: number;
    name?: string;
}


export function FeastsComponent() {

    const [feasts, setFeasts] = useState<Array<Feast>>([]);
    const [addingFeast, setAddingFeast] = useState(false);
    const [feastName, setFeastName] = useState("");

    const reload = useCallback(() => {
        axios.get("/api/feasts")
            .then(result => {
                setFeasts(result.data);
            })
    }, []);

    const addFeast = useCallback(() => {
        axios.post("/api/feasts", {
            name: feastName
        }).then(() => reload());
        setAddingFeast(false);
        setFeastName("");
    }, [feastName, reload]);

    useEffect(() => {
        reload();
    }, [reload]);

    return <Container>
        <Stack spacing={2}>
            <Typography>Partecipanti</Typography>
            <Grid container spacing={2}>
                {feasts.map(feast => (
                    <Grid key={feast.id} item xs={3}>
                        <FeastComponent feast={feast} onDelete={() => reload()}/>
                    </Grid>
                ))}
            </Grid>
            <Fab><AddIcon onClick={() => setAddingFeast(true)}/></Fab>
        </Stack>
        <Modal
            open={addingFeast}
            onClose={() => setAddingFeast(false)}
        >
            <Box sx={modalStyle}>
                <Stack spacing={1}>
                    <TextField label="nome"
                               variant="outlined"
                               value={feastName}
                               onChange={evt => setFeastName(evt.target.value)}></TextField>
                    <Button variant="outlined" onClick={addFeast}>Ok</Button>
                </Stack>
            </Box>
        </Modal>

    </Container>;
}
