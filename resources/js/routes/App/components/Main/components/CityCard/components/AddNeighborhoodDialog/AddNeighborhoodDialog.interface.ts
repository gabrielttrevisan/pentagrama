export interface AddNeighborhoodDialogProps {
    onCancel: () => void
    onConfirm: () => void
    setName: (value: string) => void
    open: boolean
}
