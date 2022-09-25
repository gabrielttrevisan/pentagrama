export interface AddCityDialogProps {
    onCancel: () => void
    onConfirm: () => void
    setName: (value: string) => void
    setConsolidatedAt: (value: string) => void
    setState: (value: string) => void
    open: boolean
}
