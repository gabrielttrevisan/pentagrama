import React from 'react'
import { FunctionComponent } from 'react'
import { CityCardProps } from './CityCard.interface'
import { DataLabel, IdLabel, NameLabel, Wrapper } from './CityCard.styles'
import { Grid, IconButton, useTheme, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { Tooltip } from '@mui/material'
import { NeighborhoodsCard } from './components/Neiborhoods/NeiborhoodsCard.component'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { AddNeighborhoodDialog } from './components/AddNeighborhoodDialog/AddNeighborhoodDialog.component'

export const CityCard: FunctionComponent<CityCardProps> = ({
    city,
    onAddNeighborhood,
    ...props
}) => {
    const theme = useTheme()
    const [showNeighborhoods, setShowNeighborhoods] = React.useState(false)
    const [addNeighborhoodOpen, setAddNeighborhoodOpen] = React.useState(false)
    const [name, setName] = React.useState('')

    const handleAddNeighborhood = () => onAddNeighborhood(city.id, name)

    return (
        <Box
            display="flex"
            alignItems="stretch"
            justifyContent="flex-start"
            flexDirection="column"
            mb="1rem"
            flex={1}
        >
            <Wrapper
                container
                columnGap="1rem"
                alignItems="stretch"
                justifyContent="space-between"
                display="flex"
                {...props}
            >
                <Grid
                    item
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    flexDirection="column"
                    flex={1}
                >
                    <IdLabel>#{city.id}</IdLabel>
                    <NameLabel>
                        {city.name} - {city.state.toUpperCase()}
                    </NameLabel>
                </Grid>

                <Grid
                    item
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    flexDirection="column"
                    flex={1}
                >
                    <IdLabel>Fundação</IdLabel>
                    <DataLabel>
                        {new Intl.DateTimeFormat('pt-br').format(
                            Date.parse(city.consolidatedAt)
                        )}
                    </DataLabel>
                </Grid>

                <Grid
                    item
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    flexDirection="column"
                    flex={1}
                >
                    <IdLabel>Bairros</IdLabel>
                    <DataLabel>{city.neighborhoods.length}</DataLabel>
                </Grid>

                <Grid
                    item
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    columnGap=".5rem"
                    flex={1}
                >
                    <Tooltip title="Ver Bairros">
                        <IconButton
                            onClick={() =>
                                setShowNeighborhoods(!showNeighborhoods)
                            }
                        >
                            {showNeighborhoods ? (
                                <VisibilityOffIcon
                                    fontSize="small"
                                    htmlColor={theme.palette.grey[600]}
                                />
                            ) : (
                                <RemoveRedEyeIcon
                                    fontSize="small"
                                    htmlColor={theme.palette.grey[600]}
                                />
                            )}
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Adicionar Bairros">
                        <IconButton
                            onClick={() => setAddNeighborhoodOpen(true)}
                        >
                            <AddIcon
                                fontSize="medium"
                                htmlColor={theme.palette.grey[600]}
                            />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Wrapper>

            <NeighborhoodsCard
                neighborhoods={city.neighborhoods}
                visible={showNeighborhoods}
            />

            <AddNeighborhoodDialog
                open={addNeighborhoodOpen}
                onCancel={() => setAddNeighborhoodOpen(false)}
                onConfirm={handleAddNeighborhood}
                setName={setName}
            />
        </Box>
    )
}
