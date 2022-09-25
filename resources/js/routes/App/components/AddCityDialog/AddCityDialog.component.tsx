import React from 'react'
import { FunctionComponent } from 'react'
import { AddCityDialogProps } from './AddCityDialog.interface'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { LabelledInput } from '../../../../common/components/LabelledInput/LabelledInput.component'
import { Box } from '@mui/material'

export const AddCityDialog: FunctionComponent<AddCityDialogProps> = ({
    onCancel,
    onConfirm,
    setName,
    setConsolidatedAt,
    setState,
    open,
}) => {
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

                        <LabelledInput
                            label="Data de Fundação"
                            name="consolidated_at"
                            type="date"
                            onValueChange={(value) => setConsolidatedAt(value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <LabelledInput
                            label="Estado"
                            name="state"
                            type="text"
                            minLength={2}
                            maxLength={2}
                            onValueChange={(value) => setState(value)}
                            placeholder="RS"
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
