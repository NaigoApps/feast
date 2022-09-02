import {Card, CardContent, Stack, Typography} from "@mui/material";
import {Feast} from "./FeastsComponent";
import DeleteIcon from '@mui/icons-material/Delete';
import {useCallback} from "react";
import axios from "axios";
import {ConfirmButton} from "./ConfirmButton";
import {Ordination} from "./OrdinationsComponent";

export function OrdinationComponent(props: { feast: Feast, ordination: Ordination, onDelete: () => void }) {

    const deleteOrdination = useCallback(() => {
        axios.delete(`/api/feasts/${props.feast.id}/${props.ordination.id}`).then(() => props.onDelete())
    }, [props]);

    return <>
        <Card>
            <CardContent>
                <Stack spacing={1}>
                    <Typography>Comanda</Typography>
                    <div>
                        <ConfirmButton message="Eliminare?" onOk={() => deleteOrdination()}
                                       icon={<DeleteIcon/>}></ConfirmButton>
                    </div>
                </Stack>
            </CardContent>
        </Card>
    </>;
}
