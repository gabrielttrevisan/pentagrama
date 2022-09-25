import React from 'react'
import { FunctionComponent } from 'react'
import { AddNeighborhoodDialogProps } from './AddNeighborhoodDialog.interface'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/material'
import { LabelledInput } from '../../../../../../../../common/components/LabelledInput/LabelledInput.component'

export const AddNeighborhoodDialog: FunctionComponent<
    AddNeighborhoodDialogProps
> = ({ onCancel, onConfirm, setName, open }) => {
    return (
        <Dialog
            open={open}
            onClose={onCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{'Nova Cidade'}</DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Box display="flex" flexDirection="column" rowGap="1rem">
                        <LabelledInput
                            label="Nome"
                            name="name"
                            type="text"
                            onValueChange={(value) => setName(value)}
                            placeholder="Pindamonhangaba"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onCancel}>Cancelar</Button>

                <Button onClick={onConfirm} autoFocus>
                    Adicionar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
