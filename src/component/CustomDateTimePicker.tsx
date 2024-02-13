import { FormControl, IconButton, InputAdornment, TextField } from "@mui/material";
import moment from "moment";
import React from "react";
import DateRangeIcon from '@mui/icons-material/DateRange';

interface DateTimePickerProps {
    onApply: Function;
    filedName: string;
    fileValue: string;
}

const CustomDateTimePicker =(props: DateTimePickerProps) => {
    const [dateSelectionModalOpen, setDateSelectionModalOpen] = React.useState(false);
    const [startDateTime, setStartDateTime] = React.useState(moment());
    const [endDateTime, setEndDateTime] = React.useState(moment());
    const openModal = () => {
        setDateSelectionModalOpen(true);
    }

    return (
        <FormControl>
            <TextField id="custom-timepicker" InputProps={
                {
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={openModal}></IconButton>
                            <DateRangeIcon />
                        </InputAdornment>
                    )
                }
            }>

            </TextField>
        </FormControl>
    )

}

export default CustomDateTimePicker;