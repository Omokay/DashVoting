import React from 'react';
import {useHistory} from 'react-router-dom';
import {useStyles} from './newRegistration.page';
import TextInput from "../../components/textInput/textInput.component";
import CustomButton from "../../components/customButton/customButton.component";
import SmallSelect from "../../components/smallSelect/smallSelect.component";
import CustomTextInput from "../../components/textInput/customTextInput.component";

const ContactPerson = () => {
    const classes = useStyles();
    const history = useHistory();

    function dummyRoute(){
        history.push("/login_info");
    }

    return (
        <div className={classes.box2}>
            <h3 className={classes.title}>Company's Contact Person</h3>
            <p>Fill in the data for profile. It will take a few seconds</p>
            <div className={classes.margLeft}>
                <div style={{
                    fontSize: '18px',
                    marginLeft: '3px',

                }}>
                    <p className={classes.title2}>Contact Person's data</p>
                    <p style={{fontSize:  '10px',}}>Please fill in the details correctly</p>
                </div>
                <TextInput label='Staff Name' type='text' width='380px'/>
                <TextInput label='Email Address' type='text' width='380px'/>
                <TextInput label='Staff ID' type='text' width='380px'/>

                {/*   phone number*/}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '320px',
                    padding: 0,

                }}>
                    <SmallSelect width='80px'/>
                    <CustomTextInput
                        style={{marginLeft: '2px'}}
                        color='secondary' label='' type='text'/>
                </div>
            </div>
            <div className={classes.noMarg}>
                <CustomButton className={classes.noMarg} name='Continue' handleButton={dummyRoute} width='160px'/>
            </div>
        </div>
    )
}

export default ContactPerson;
