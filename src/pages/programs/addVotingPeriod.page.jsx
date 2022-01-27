import React from 'react';
import {useStyles} from '../../pages/client_registration/newRegistration.page';
import TextInput from "../../components/textInput/textInput.component";
import CustomSelect from "../../components/customselect/customselect.component";
import CustomDateSelect from "../../components/customDateSelect/customDateSelect.component";
import CustomButton from "../../components/customButton/customButton.component";
import MultipleSelect from "../../components/multiselect/multiselect.component";

const AddVotingPeriod = () => {
    const classes = useStyles();
    return (
        <div className={classes.box2}>
            <h3 className={classes.title}>Add Voting Period</h3>
            <p>Fill in the data for profile. It will take a few seconds</p>
            <div className={classes.margLeft}>
                <div style={{
                    fontSize: '18px',
                    marginLeft: '3px',

                }}>
                    <p className={classes.title2}>Voting Period</p>
                    <p style={{fontSize:  '10px',}}>Please fill in details below correctly</p>
                </div>
                <MultipleSelect />
                {/*<CustomSelect name='Program Type' label='Program Type' minWidth='380px' options={['Events', 'Shows']}/>*/}
                <div style={{width: '380px', display: 'flex', justifyContent: 'space-between',}}>
                    <CustomDateSelect name='Start Date' label='Start Date' maxWidth='80px' />
                    <CustomDateSelect name='End Date' label='End Date' maxWidth='80px' />
                </div>
            </div>
            <div className={classes.noMarg}>
                <CustomButton className={classes.noMarg} name='Create Voting Period' handleButton='' width='160px'/>
            </div>
        </div>
    )
}

export default AddVotingPeriod;