import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import dropIcon from '../../static/images/dropicon.svg';

export default function CustomSelect () {
    const [userType, setUserType] = React.useState('');

    const handleChange = (event) => {
        setUserType(event.target.value);
    };

    const RenderIcon = () => {
        return (
            <DropdownIcon>
                <Image src={dropIcon} />
            </DropdownIcon>
        )
    }



    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-simple-select-standard-label">Account Type</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={userType}
                    onChange={handleChange}
                    label="Account Type"
                    IconComponent={() => <RenderIcon/>}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>ERM</MenuItem>
                    <MenuItem value={20}>IT Risk</MenuItem>
                    <MenuItem value={30}>Bespoke</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}



const DropdownIcon = styled.div`
  width: 8px;
  height: 13px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

