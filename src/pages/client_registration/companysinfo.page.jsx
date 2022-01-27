import React from 'react';
import {useStyles} from "./newRegistration.page";
import TextInput from "../../components/textInput/textInput.component";
import CustomSelect from "../../components/customselect/customselect.component";
import CheckBox from "../../components/checkbox/checkBox.component";
import CustomButton from "../../components/customButton/customButton.component";


const CompanyInfo = () => {
    const classes = useStyles();
    return (
         <div className={classes.box2}>
            <h3 className={classes.title}>Company's information</h3>
            <p>Fill in the data for profile. It will take a few seconds</p>
            <div className={classes.margLeft}>
                <div style={{
                    fontSize: '18px',
                    marginLeft: '3px',

                }}>
                    <p className={classes.title2}>Company data</p>
                    <p style={{fontSize:  '10px',}}>Specify as is in your CAC</p>
                </div>
                <TextInput label='Company Name' type='text'/>
                <TextInput label='Company Address' type='text'/>
                <TextInput label='CAC Number' type='text'/>
                <TextInput label='Company Email Address' type='email'/>
            </div>
            <div className={classes.noMarg}>
                <CustomButton className={classes.noMarg} name='Continue' handleButton='' width='160px'/>
            </div>
         </div>
    )
}

export default CompanyInfo;