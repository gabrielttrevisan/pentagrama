export interface FilterDialogProps {
    onCancel: () => void
    onConfirm: () => void
    setNameCity: (value?: string) => void
    setNameNeighborhood: (value?: string) => void
    setConsolidationStart: (value?: string) => void
    setConsolidationEnd: (value?: string) => void
    open: boolean
}
