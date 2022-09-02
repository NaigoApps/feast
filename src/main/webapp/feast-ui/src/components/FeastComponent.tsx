import {Card, CardContent, IconButton, Stack, Typography} from "@mui/material";
import {Feast} from "./FeastsComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import {useCallback} from "react";
import axios from "axios";
import {ConfirmButton} from "./ConfirmButton";
import {useNavigate} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function FeastComponent(props: { feast: Feast, onDelete: () => void }) {

    const deleteFeast = useCallback(() => {
        axios.delete("/api/feasts/" + props.feast.id).then(() => props.onDelete())
    }, [props]);

    const navigate = useNavigate();

    return <>
        <Card>
            <CardContent>
                <Stack spacing={1}>
                    <Typography>{props.feast?.name}</Typography>
                    <div>
                        <ConfirmButton message="Eliminare?" onOk={() => deleteFeast()}
                                       icon={<DeleteIcon/>}></ConfirmButton>
                        <IconButton onClick={() => navigate(props.feast.id)}>
                            <ArrowForwardIosIcon></ArrowForwardIosIcon>
                        </IconButton>
                    </div>
                </Stack>
            </CardContent>
        </Card>
    </>;
}
