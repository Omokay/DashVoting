import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 15;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const options = [
    1,2,3,4,5,6,7,8,9
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelect() {
    const theme = useTheme();
    const [option, setOption] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setOption(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{width: 380, m: 0}}>
                <InputLabel style={{margin: 0, textAlign: 'left', padding: 0}} id="demo-multiple-name-label">Show Options</InputLabel>
                <Select
                    variant='standard'
                    labelId="demo-multiple-name-label"
                    label='Options'
                    id="demo-multiple-name"
                    multiple
                    value={option}
                    onChange={handleChange}
                    // input={<OutlinedInput label="Options" />}
                    MenuProps={MenuProps}
                >
                    {options.map((opt) => (
                        <MenuItem
                            key={opt}
                            value={opt}
                            style={getStyles(opt, option, theme)}
                        >
                            {opt}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
