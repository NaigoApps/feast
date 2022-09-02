import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Box, Button, Container, Fab, Grid, Modal, Stack, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {modalStyle} from "../utils";
import {CategoryComponent} from "./CategoryComponent";

export interface Category {
    id: number;
    name?: string;
    dishes?: Array<Dish>;
}

export interface Dish {
    id: number;
    name: string;
    price: number;
}


export function MenuComponent() {

    const [categories, setCategories] = useState<Array<Category>>([]);

    const [addingCategory, setAddingCategory] = useState(false);
    const [categoryName, setCategoryName] = useState("");

    const reload = useCallback(() => {
        axios.get("/api/categories")
            .then(result => {
                setCategories(result.data);
            })
    }, []);

    const addCategory = useCallback(() => {
        axios.post("/api/categories", {
            name: categoryName
        }).then(() => reload());
        setAddingCategory(false);
        setCategoryName("");
    }, [categoryName, reload]);

    useEffect(() => {
        reload();
    }, [reload]);

    return <Container>
        <Stack spacing={2}>
            <Typography>Menu</Typography>
            <Grid container spacing={2}>
                {categories.map(category => (
                    <Grid key={category.id} item xs={3}>
                        <CategoryComponent category={category} onDelete={() => reload()}/>
                    </Grid>
                ))}
            </Grid>
            <Fab><AddIcon onClick={() => setAddingCategory(true)}/></Fab>
        </Stack>
        <Modal
            open={addingCategory}
            onClose={() => setAddingCategory(false)}
        >
            <Box sx={modalStyle}>
                <Stack spacing={1}>
                    <TextField label="nome"
                               variant="outlined"
                               value={categoryName}
                               onChange={evt => setCategoryName(evt.target.value)}></TextField>
                    <Button variant="outlined" onClick={addCategory}>Ok</Button>
                </Stack>
            </Box>
        </Modal>

    </Container>;
}
