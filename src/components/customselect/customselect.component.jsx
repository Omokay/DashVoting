import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import dropIcon from '../../static/images/dropicon.svg';

export default function CustomSelect ({name, minWidth, label, options}) {
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
            <FormControl variant="standard" sx={{ minWidth: `${minWidth}`, margin: '20px 0',}}>
                <InputLabel style={{color: '#575F6E', opacity: '0.7'}} id="demo-simple-select-standard-label">{name}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={userType}
                    onChange={handleChange}
                    label={label}
                    IconComponent={() => <RenderIcon/>}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        (options && options).map((item, index) => (
                            <MenuItem key={index} value={index}>{item}</MenuItem>
                        ))
                    }
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

