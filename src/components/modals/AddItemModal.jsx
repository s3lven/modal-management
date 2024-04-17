import { Dialog, DialogTitle, Stack, TextField, Button, DialogContent } from '@mui/material'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useItemsDispatch } from '../../context/ItemsContext'

function AddItemModal({ onClose, nextId }) {
    // React Hook Form
    const form = useForm({
        defaultValues: {
            name : "",
            category : ""
        }
    })
    const { register, control, handleSubmit, formState } = form
    const { errors } = formState

    // useItemsDispatch Custom Hook
    const dispatch = useItemsDispatch()

    // Using Dispatch
    const onSubmit = (data) => {
        dispatch({
            type: 'added',
            id: nextId,
            name: data.name,
            category: data.category,
            number: data.number
            
        })
        onClose()
    }

    return (
        <Dialog open fullWidth onClose={onClose}>
            <DialogTitle>Add a new item</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Stack spacing={3} justifyContent="center" direction="column">
                        <TextField 
                            fullWidth
                            margin="dense"
                            required
                            label="Item Name"
                            id="name"
                            {...register("name", {required : "Item name is required"})}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                        <TextField 
                            fullWidth
                            required
                            label="Category"
                            id="category"
                            {...register("category", {required : "Category is required"})}
                            error={!!errors.category}
                            helperText={errors.category?.message}
                        />
                        <TextField 
                            fullWidth
                            required
                            label="Number Available"
                            type="number"
                            id="number"
                            {...register("number", {required : "Number available is required"})}
                            error={!!errors.number}
                            helperText={errors.number?.message}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            >
                            Submit
                        </Button>
                    </Stack>
                </form>
            </DialogContent>
            <DevTool control={control}/>
        </Dialog>
    )
}

export default AddItemModal