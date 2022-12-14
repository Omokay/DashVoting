import React from 'react';
import {useHistory} from 'react-router-dom';
import {useStyles} from './newRegistration.page';
import TextInput from "../../components/textInput/textInput.component";
import CustomButton from "../../components/customButton/customButton.component";
import CustomSelect from "../../components/customselect/customselect.component";
import CheckBox from "../../components/checkbox/checkBox.component";



const LoginInfo = () => {
    const classes = useStyles();
    const history = useHistory();

    function dummyRoute() {
        history.push('/add_programs');
    }

    return (
        <div className={classes.box2}>
            <h3 className={classes.title}>Company's Login details</h3>
            <p>Fill in the data for profile. It will take a few seconds</p>
            <div className={classes.margLeft}>
                <div style={{
                    fontSize: '18px',
                    marginLeft: '3px',

                }}>
                    <p className={classes.title2}>Contact Person's data</p>
                    <p style={{fontSize:  '10px',}}>Please fill in details correctly</p>
                </div>
                <TextInput label='Username (Email address)' type='email' width='380px'/>
                <TextInput label='New Password' type='password' width='380px'/>
                {/*<div className={classes.margRight0}>Password Requirement &nbsp;<strong>?</strong></div>*/}
                <TextInput label='Confirm New Password' type='password' width='380px'/>
                <div style={{width: '100%'}}>
                    <CheckBox text='I agree with the' textLink='Terms and Conditions' />
                </div>
            </div>
            <div className={classes.noMarg}>
                <CustomButton className={classes.noMarg} name='Create' handleButton={dummyRoute} width='160px'/>
            </div>
        </div>
    )
}


export default LoginInfo;
