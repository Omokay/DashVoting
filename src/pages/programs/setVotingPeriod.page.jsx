import {useStyles} from '../../pages/client_registration/newRegistration.page';
import TextInput from "../../components/textInput/textInput.component";
import CustomSelect from "../../components/customselect/customselect.component";
import CustomDateSelect from "../../components/customDateSelect/customDateSelect.component";
import CustomButton from "../../components/customButton/customButton.component";
import MultipleSelect from "../../components/multiselect/multiselect.component";
import React from "react";

const SetVotingPeriod = () => {
    const classes = useStyles();
    return (
        <div className={classes.box2}>
            <h3 className={classes.title}>Set Voting Period</h3>
            <p>Fill in the data for profile. It will take a few seconds</p>
            <div className={classes.margLeft}>
                <div style={{
                    fontSize: '18px',
                    marginLeft: '3px',

                }}>
                    <p className={classes.title2}>Voting Period</p>
                    <p style={{fontSize:  '10px',}}>Please fill in details below correctly</p>
                </div>
                <TextInput label='Program Name' type='text' width='380px'/>
                <TextInput label='Maximum Vote for the Period' type='text' width='380px'/>
                <MultipleSelect />
                <div style={{width: '380px', display: 'flex', justifyContent: 'space-between',}}>
                    <CustomDateSelect name='Start Date' label='Start Date' maxWidth='80px' />
                    <CustomDateSelect name='End Date' label='End Date' maxWidth='80px' />
                </div>
            </div>
            <div className={classes.noMarg}>
                <CustomButton className={classes.noMarg} name='Create Period' handleButton='' width='160px'/>
            </div>
        </div>
    )
}

export default SetVotingPeriod;