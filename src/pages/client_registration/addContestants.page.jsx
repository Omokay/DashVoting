import React from 'react';
import {useStyles} from '../client_registration/newRegistration.page';
import TextInput from "../../components/textInput/textInput.component";
import CustomButton from "../../components/customButton/customButton.component";
import CustomDateSelect from "../../components/customDateSelect/customDateSelect.component";



const AddContestants = () => {
    const classes = useStyles();
    return(
        <div className={classes.box2}>
            <h3 className={classes.title}>Add Contestants</h3>
            <p>Fill in the data for profile. It will take a few seconds</p>
            <div className={classes.margLeft}>
                <div style={{
                    fontSize: '18px',
                    marginLeft: '3px',

                }}>
                    <p className={classes.title2}>Contestant's data</p>
                    <p style={{fontSize:  '10px',}}>Please in fill in details below correctly</p>
                </div>
                <TextInput label='Contestant Name' type='text'/>
                <TextInput label='Code Address' type='text'/>
                <div style={{width: '380px', display: 'flex', justifyContent: 'space-between',}}>
                    <CustomDateSelect name='Start Date' label='Start Date' maxWidth='80px' />
                    <CustomDateSelect name='End Date' label='End Date' maxWidth='80px' />
                </div>
            </div>
            <div className={classes.noMarg}>
                <CustomButton className={classes.noMarg} name='Continue' handleButton='' width='160px'/>
            </div>
        </div>
    )
}

export default AddContestants;