import React from 'react'
import { FunctionComponent } from 'react'
import { FilterDialogProps } from './FilterDialog.interface'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { LabelledInput } from '../../../../common/components/LabelledInput/LabelledInput.component'
import { Box } from '@mui/material'

export const FilterDialog: FunctionComponent<FilterDialogProps> = ({
    onCancel,
    onConfirm,
    setNameCity,
    setNameNeighborhood,
    setConsolidationEnd,
    setConsolidationStart,
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
                            label="Nome da Cidade"
                            name="name_city"
                            type="text"
                            onValueChange={(value) => setNameCity(value)}
                            placeholder="Pindamonhangaba"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <LabelledInput
                            label="Nome do Bairro"
                            name="name_neighborhood"
                            type="text"
                            onValueChange={(value) =>
                                setNameNeighborhood(value)
                            }
                            placeholder="Pindamonhangaba"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <LabelledInput
                            label="Data Inicial do Período Fundação"
                            name="consolidation_start"
                            type="date"
                            onValueChange={(value) =>
                                setConsolidationStart(value)
                            }
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <LabelledInput
                            label="Data Final do Período Fundação"
                            name="consolidation_end"
                            type="date"
                            onValueChange={(value) =>
                                setConsolidationEnd(value)
                            }
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onCancel}>Limpar</Button>

                <Button onClick={onConfirm} autoFocus>
                    Filtrar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
