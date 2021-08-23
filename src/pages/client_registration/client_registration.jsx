import React, {useState} from 'react';
import palogo from '../../static/images/palogo.png';
import {makeStyles} from "@material-ui/core/styles";
import ProgressStepper from "../../components/progressStepper/progressStepper.component";
import LockIcon from '@material-ui/icons/Lock';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import TextInput from '../../components/textInput/textInput.component';
import CustomButton from "../../components/customButton/customButton.component";
import SmallSelect from "../../components/smallSelect/smallSelect.component";
import ReplayIcon from '@material-ui/icons/Replay';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
        logo: {
            width: '90.41px',
            height: '26.64px',
            marginLeft: '40px',
            marginTop: '40px'
        },
        flex: {
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '480px',
            height: '65px',
            [theme.breakpoints.up('xs')]: {
                height: 'auto',
                paddingTop:  '20px',
                paddingLeft: '15px',
                paddingRight: '15px',
            },
            backgroundColor: '#f4f5f6',
            borderRadius: '5px',
            padding:  'auto 15px',
            fontSize: '12px',
        },
        flex2: {
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '180px',
            height: 'auto',
            fontSize: '12px',
            marginLeft: '10px',
        },
        flex3: {
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '440px',
            height: 'auto',
            fontSize: '12px',
            marginLeft: '10px',
        },

        title: {
          fontWeight: 'bold',
        },
        box: {
            maxWidth: '520px',
            height: 'auto',
            paddingTop: '100px',
            margin: '0 auto',
        },
        pad5: {
            padding: '0 15px',
        },
        pad20: {
            padding: '0 20px',
        },
        padTop30: {
            paddingTop: '20px',
            marginLeft: '20px',
        },
        verifiedEmail: {
            fontSize:  '16px',
            fontWeight: '500',

        },
        iconStyles: {
            color:  '#918f8f',
            fontSize: 'medium',
        },
        noMarg: {
            margin: '10px 0',

        }
        // progressLine: {
        //     display: 'flex',
        //     justifyContent: 'space-between',
        //     width:  '300px',
        //     alignContent: 'center',
        //     margin: '0 auto',
        // },
        // step: {
        //     width: '10px',
        //     height: '10px',
        //     backgroundColor: 'gray',
        // }
}));

const ClientRegistration = () => {
    const classes = useStyles();


    const [showStatement, setStatement] = useState(true);
    const [viewToDisplay,  setView] = useState(3);
    /**
     * Initialise state
     * */


    /**
     * Sign up Logic
     * */


    /**
     * Sign in Logic
     * */

    return (
       <div className={classes.pad20}>
           <div className='header container-fluid'>
               <nav>
                   <div className='nav-brand'>
                       <a className='navbar-brand' href='/'><img className={classes.logo} src={palogo} alt='img'/></a>
                   </div>
               </nav>
           </div>
           <ProgressStepper />

           {
               // STEP 1 FOR CLIENT CREATION >>>> VALIDATE EMAIL ADDRESS
               (viewToDisplay  ===  1) ?
                   (
                       <div className={classes.box}>
                           <h3 className={classes.title}>Create User</h3>
                           <p>Fill in the regristration data. It will take a couple of minutes.
                               All you need is an e-mail and a link would be sent to complete the user creation</p>

                           {
                               (showStatement) ?
                                   (<div className={classes.flex}>
                                       <LockIcon className={classes.iconStyles}/>
                                       <p className={classes.pad5}>We take privacy issues seriously. You can be sure that your personal
                                           data is securely protected</p>
                                       <CloseIcon className={classes.iconStyles}/>

                                   </div>) :
                                   null
                           }
                           <div className={classes.noMarg}>
                               <TextInput label='Enter your email address' width='480px' type='email'/>
                           </div>
                           <div className={classes.noMarg}>
                               <CustomButton className={classes.noMarg} name='Send link' handleButton='' width='160px'/>
                           </div>
                       </div>
                   ) :

                   // STEP 2 FOR CLIENT REGISTRATION >>>> VALIDATE PHONE NUMBER
                   (viewToDisplay === 2) ?
                       (
                           <div className={classes.box}>
                               <h3 className={classes.title}>Create User</h3>
                               <p>Fill in the regristration data. You're almost there.
                                   Enter your phone number</p>

                               {
                                   (showStatement) ?
                                       (<div className={classes.flex}>
                                           <LockIcon className={classes.iconStyles}/>
                                           <p className={classes.pad5}>We take privacy issues seriously. You can be sure that your personal
                                               data is securely protected</p>
                                           <CloseIcon className={classes.iconStyles}/>

                                       </div>) :
                                       null
                               }
                               <div className={classes.padTop30}>
                                   <p style={{
                                       fontSize: '16px',
                                       fontWeight: '500',
                                       margin: '3px',

                                   }}>omoke.chuku@up-ng.com</p>
                                   <div className={classes.flex2}>
                                       <CheckIcon className={classes.iconStyles}/>
                                       <p style={{
                                           color:  'secondary',
                                       }}>Email Address Confirmed</p>
                                   </div>
                               </div>

                               <div>
                                   <p className={classes.pad5} style={{
                                       fontSize: '14px',
                                       margin: '5px',
                                       color: 'secondary',

                                   }}>Enter your phone number</p>
                               </div>
                               <div className={classes.noMarg} style={{
                                   display: 'flex',
                                   justifyContent: 'space-between',
                                   width: '410px',
                                   padding: 0,
                               }}>
                                   <SmallSelect width='100px'/>
                                   <TextInput
                                              color='secondary' label='' width='300px' type='text'/>
                               </div>
                               <div className={classes.noMarg}>
                                   <CustomButton className={classes.noMarg} name='Send code' handleButton='' width='160px'/>
                               </div>
                           </div>
                       ) :
                       // STEP 3 FOR CLIENT REG >>>> SETUP ACCOUNT PASSWORD AND COMPLETE REGISTRATION
                       (
                           <div className={classes.box}>
                               <h3 className={classes.title}>Create User</h3>
                               <p>Fill in the regristration data. You're almost there.
                                   Enter your phone number</p>

                               {
                                   (showStatement) ?
                                       (<div className={classes.flex}>
                                           <LockIcon className={classes.iconStyles}/>
                                           <p className={classes.pad5}>We take privacy issues seriously. You can be sure that your personal
                                               data is securely protected</p>
                                           <CloseIcon className={classes.iconStyles}/>

                                       </div>) :
                                       null
                               }
                               <div className={classes.padTop30}>
                                   <p style={{
                                       fontSize: '16px',
                                       fontWeight: '500',
                                       margin: '3px',

                                   }}>omoke.chuku@up-ng.com</p>
                                   <div className={classes.flex2}>
                                       <CheckIcon className={classes.iconStyles}/>
                                       <p style={{
                                           color:  'secondary',
                                       }}>Email Address Confirmed</p>
                                   </div>
                               </div>
                               <div className={classes.padTop30}>
                                     <p style={{
                                         fontSize: '16px',
                                         fontWeight: '500',
                                         margin: 0,
                                     }}>+234 08105470291</p>
                                     <div className={classes.flex3}>
                                         <p style={{
                                             color:  'secondary',
                                             paddingTop: '10px',
                                             alignItems: 'center'
                                         }}>Number not confirmed yet</p>
                                         <EditIcon color='primary' fontSize='small' />
                                     </div>
                                 </div>


                               {/*<div>*/}
                               {/*    <p className={classes.pad5} style={{*/}
                               {/*        fontSize: '14px',*/}
                               {/*        margin: '5px',*/}
                               {/*        color: 'secondary',*/}

                               {/*    }}>Enter your phone number</p>*/}
                               {/*</div>*/}
                               {/*<div className={classes.noMarg} style={{*/}
                               {/*    display: 'flex',*/}
                               {/*    justifyContent: 'space-between',*/}
                               {/*    width: '410px',*/}
                               {/*    padding: 0,*/}
                               {/*}}>*/}
                               {/*    <SmallSelect width='100px'/>*/}
                               {/*    <TextInput*/}
                               {/*        color='secondary' label='' width='300px' type='text'/>*/}
                               {/*</div>*/}

                               <div style={{
                                   display: 'flex',
                                   justifyContent: 'space-between',
                                   maxWidth: '500px',
                                   height: 'auto',
                                   fontSize: '12px',
                                   flexWrap: 'wrap',
                               }}>
                                  <>
                                      <TextInput label='Confirmation code' type='text' />
                                  </>
                                   <div style={{
                                       display: 'flex',
                                       justifyContent: 'space-between',
                                       alignItems: 'center',
                                       width: '130px',
                                       marginTop: '5px',
                                       paddingTop: '5px',
                                   }}>
                                       <ReplayIcon fontSize='small' color='primary' span='Send again'/>
                                       <span style={{
                                           width: '100px',
                                           fontSize: '16px',
                                           fontWeight: 'bold',

                                           color: '#37a3ea',

                                       }}>Send again</span>
                                   </div>
                               </div>
                               <>
                                   <p style={{
                                       color:  'grey',
                                       paddingTop: 0,
                                       alignItems: 'center'
                                   }}>Confirm phone number with code from sms message</p></>
                               <div className={classes.noMarg}>
                                   <CustomButton className={classes.noMarg} name='Send code' handleButton='' width='160px'/>
                               </div>
                           </div>
                       )
           }
       </div>
    );
}

export default ClientRegistration;
