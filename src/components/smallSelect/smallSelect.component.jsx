/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'
import codes from 'country-calling-code';

const SmallSelect = ({label, width}) =>  {

    console.log(codes);


    return (
        <Autocomplete
            id="countycode"
            options={codes}
            getOptionLabel={(option) => '+' + option.countryCodes[0]}
            style={{ width: width }}
            renderInput={(params) => <TextField style={{
                paddingTop: '20px',
                textAlign: 'center',
            }}{...params} label={label} margin="" />}
        />
    );
};


export default SmallSelect;
