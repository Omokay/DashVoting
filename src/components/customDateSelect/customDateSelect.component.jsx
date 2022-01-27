import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import dropIcon from '../../static/images/dropicon.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function CustomDateSelect ({name, maxWidth, label, options}) {

    const RenderIcon = () => {
        return (
            <DropdownIcon>
               <ArrowDropDownIcon />
            </DropdownIcon>
        )
    }



    return (
        <div>
            <FormControl variant="standard" sx={{ minWidth: `${maxWidth}`, margin: '20px 0'}}>
                <InputLabel style={{color: '#575F6E', opacity: '0.7'}} id="demo-simple-select-standard-label">{name}</InputLabel>
               <div style={{
                   display: 'flex',
                   justifyContent: 'space-between',
                   width: '100%',
                   margin: '30px 0',
               }}>
                   <Select
                       labelId="demo-simple-select-standard-label"
                       id="demo-simple-select-standard"
                       value=''
                       onChange=''
                       label={label}
                       IconComponent={() => <RenderIcon/>}
                   >
                       <MenuItem value="">
                           <em>None</em>
                       </MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                   </Select>
                   <Select
                       labelId="demo-simple-select-standard-label"
                       id="demo-simple-select-standard"
                       value=''
                       onChange=''
                       label={label}
                       IconComponent={() => <RenderIcon/>}
                   >
                       <MenuItem value="">
                           <em>None</em>
                       </MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                   </Select>
                   <Select
                       labelId="demo-simple-select-standard-label"
                       id="demo-simple-select-standard"
                       value=''
                       onChange=''
                       label={label}
                       IconComponent={() => <RenderIcon/>}
                   >
                       <MenuItem value="">
                           <em>None</em>
                       </MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                       <MenuItem value={10}>01</MenuItem>
                   </Select>
               </div>
            </FormControl>

        </div>
    );
}



const DropdownIcon = styled.div`
  width: 8px;
  height: 13px;
  padding: 4px 20px 25px 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

