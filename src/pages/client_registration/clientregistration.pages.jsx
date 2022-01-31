import React from "react";
import Header from "../../components/header/header.component";
import {makeStyles} from "@material-ui/core/styles";
import NewRegistration from "./newRegistration.page";
import VerifyPhone from "./verifyphone.page";
import CompanysinfoPage from "./companysinfo.page";
import CompanyInfo from "./companysinfo.page";
import ContactPerson from "./contactperson.page";
import LoginInfo from "./loginInfo.page";
import AddProgram from "../programs/addPrograms.page";
import AddVotingPeriod from "../programs/addVotingPeriod.page";
import AddContestants from "../programs/addContestants.page";


const useStyles = makeStyles((theme) => ({
    logo: {
        width: '90.41px',
        height: '26.64px',
        marginLeft: '40px',
        marginTop: '40px'
    },
    progressLine: {
        display: 'flex',
        justifyContent: 'space-between',
        width:  '150px',
        alignContent: 'center',
        alignItems:  'center',
        marginTop: '80px',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    step: {
        width: '13px',
        height: '10px',
        // border: '2px Solid #CDCDCD',
        backgroundColor: '#2196f3',
        borderRadius: '50%',
    },
    line: {
        width: '45px',
        height: '1px',
        alignSelf: 'center',
        backgroundColor: '#CDCDCD',
    },
    vertical: {
        marginTop: '100px',
    },
    margLeft: {
        marginLeft: '20px',
    },
    pad20: {
        padding: '0 20px',
    },
}));



const ClientRegistration = () => {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <div className={classes.progressLine}>
                <div className={classes.step}/>

                <div className={classes.line}/>

                <div className={classes.step}/>

                <div className={classes.line}/>

                <div className={classes.step}/>

                <div className={classes.line}/>

                <div className={classes.step}/>
            </div>

            <>
                {/*<NewRegistration />*/}
                {/*<VerifyPhone />*/}
                {/*<CompanyInfo />*/}
                {/*<ContactPerson />*/}
                {/*<LoginInfo />*/}
                {/*<AddProgram />*/}
                {/*<AddVotingPeriod />*/}
                <AddContestants />
            </>
        </div>
    )
}

export default ClientRegistration;