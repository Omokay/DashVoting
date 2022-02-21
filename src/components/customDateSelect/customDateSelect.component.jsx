import {useEffect, useState} from "react";import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import dropIcon from '../../static/images/dropicon.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
   placeholder: {
     width: 'max-content',
     marginLeft: '8px',
   },
}))


export default function CustomDateSelect ({name, maxWidth, label, options}) {

    const classes = useStyles();

    const Months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const [daysSelect, setDaysSelect] = useState([]);

    const Days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25',
        '26', '27', '28', '29', '30', '31'];

    const Years = ['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030',
                   '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040'];


    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');


    useEffect(() => {
        if (!month.length) return;
        if (month === '02') {
            console.log(Days.slice(0, 28));
            setDaysSelect(Days.slice(0, 28));
        } else if (month === '04' || month === '05' || month === '08' || month === '11') {
            console.log(Days.slice(0, 30));
            setDaysSelect(Days.slice(0, 30));
        }
    }, [month]);


    const handleDay = (e) => {
        setDay(e.target.value);
    };
    const handleMonth = (e) => {
        setMonth(e.target.value);
    };
    const handleYear = (e) => {
        setYear(e.target.value);
    };


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
                       value={day}
                       onChange={handleDay}
                       label={label}
                       // displayEmpty={true}
                       // renderValue={() => 'dd'}
                       IconComponent={() => <RenderIcon/>}
                   >
                       <MenuItem value="">
                           <em>dd</em>
                       </MenuItem>
                       {
                           ((Days && Days).map((day, index) => (
                               <MenuItem key={index} value={day}>{day}</MenuItem>
                           )) )
                       }
                   </Select>
                   <Select
                       labelId="demo-simple-select-standard-label"
                       id="demo-simple-select-standard"
                       value={month}
                       onChange={handleMonth}
                       label={label}
                       // displayEmpty={true}
                       // renderValue={() => (<p className={classes.placeholder}>mm</p>)}
                       IconComponent={() => <RenderIcon/>}
                   >
                       <MenuItem value="">
                           <em>mm</em>
                       </MenuItem>
                       {
                       ((Months && Months).map((months, index) => (
                           <MenuItem key={index} value={months}>{months}</MenuItem>
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
                           <em>yyyy</em>
                       </MenuItem>
                       {
                           ((Years && Years).map((years, index) => (
                               <MenuItem key={index} value={years}>{years}</MenuItem>
                           )))
                       }
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

