import {useState} from "react";import InputLabel from '@mui/material/InputLabel';
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

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    const handleDay = (e) => {
        setDay(e.target.value);
    };
    const handleMonth = (e) => {
        setMonth(e.target.value);
    };
    const handleYear = (e) => {
        setYear(e.target.value);
    };


    const Months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    const Days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
                   '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25',
                    '26', '27', '28', '29', '30', '31'];

    // const Days28 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    //     '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25',
    //     '26', '27', '28', '29', '30', '31'];
    //
    // const Days31 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
    //     '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25',
    //     '26', '27', '28', '29', '30', '31'];

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
                       value={day}
                       onChange={handleDay}
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
                       value={month}
                       onChange={handleMonth}
                       label={label}
                       IconComponent={() => <RenderIcon/>}
                   > {
                       ((Months && Months).map((month, index) => (
                           <MenuItem key={index} value={month}>{month}</MenuItem>
                       )) )
                   }
                   </Select>
                   <Select
                       labelId="demo-simple-select-standard-label"
                       id="demo-simple-select-standard"
                       value={year}
                       onChange={handleYear}
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

