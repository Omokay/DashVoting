import React from 'react';
import {useStyles} from '../../pages/client_registration/newRegistration.page';
import TextInput from "../../components/textInput/textInput.component";
import CustomButton from "../../components/customButton/customButton.component";
import CustomSelect from "../../components/customselect/customselect.component";
import CustomDateSelect from "../../components/customDateSelect/customDateSelect.component";


const AddProgram = () => {
    const classes = useStyles();
    return (
        <div className={classes.box2}>
            <h3 className={classes.title}>Add Program Details</h3>
            <p>Fill in the data for profile. It will take a few seconds</p>
            <div className={classes.margLeft}>
                <div style={{
                    fontSize: '18px',
                    marginLeft: '3px',

                }}>
                    <p className={classes.title2}>Program data</p>
                    <p style={{fontSize:  '10px',}}>Please fill in details correctly</p>
                </div>
                <TextInput label='Program Name' type='text'/>
                <TextInput label='Program Description' type='text'/>
                <TextInput label='Code Name' type='text'/>
                <CustomSelect name='Program Type' label='Program Type' minWidth='380px' options={['Events', 'Shows']}/>
                <div style={{width: '380px', display: 'flex', justifyContent: 'space-between',}}>
                    <CustomDateSelect name='Start Date' label='Start Date' maxWidth='80px' />
                    <CustomDateSelect name='End Date' label='End Date' maxWidth='80px' />
                </div>
            </div>
            <div className={classes.noMarg}>
                <CustomButton className={classes.noMarg} name='Create Program' handleButton='' width='160px'/>
            </div>
        </div>
    )
}

export default AddProgram;