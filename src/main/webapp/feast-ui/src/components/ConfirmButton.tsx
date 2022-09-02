import {Box, IconButton, Modal, Stack, Typography} from "@mui/material";
import {ReactElement, useCallback, useState} from "react";
import {modalStyle} from "../utils";
import CheckIcon from '@mui/icons-material/Check';

export function ConfirmButton(props: { message: string, onOk: () => void, icon: ReactElement }) {

    const [open, setOpen] = useState(false);

    const onOk = useCallback(() => {
        setOpen(false);
        props.onOk();
    }, [props]);

    return <>
        <IconButton onClick={() => setOpen(true)}>{props.icon}</IconButton>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={modalStyle}>
                <Stack spacing={1}>
                    <Typography>{props.message}</Typography>
                    <IconButton onClick={() => onOk()}><CheckIcon color="success"></CheckIcon></IconButton>
                </Stack>
            </Box>
        </Modal>
    </>;
}
