import {makeStyles} from "@material-ui/core/styles";
import FilterButton from "../filterButton/filterButton.component";
import ProgramTable from "../muiTable/programTable.component";
import {useContext, useEffect} from "react";
import {VotingContext} from "../../context/voting_context";
import {baseUrl, httpGet} from "../../Http_Requests/axios_requests";


const Programs = () => {
    const classes = useStyles();

    // const {programs, setPrograms} = useContext(VotingContext);

    // useEffect(() => {
    //     if (programs.length) return;
    //     getPrograms();
    // }, []);
    //
    //
    // const getPrograms = () => {
    //     const companyId = Math.floor(Math.random() * (3 - 1) + 1);
    //     // console.log(companyId);
    //     const url = `${baseUrl}/api/v1/companies/${companyId}/programs`;
    //     httpGet(url).then((res) => {
    //         setPrograms(res.data);
    //     })
    // }

    return (
        <div className={classes.root}>
            <div className={classes.headerDiv}>
                <h1 className={classes.header}>Program/ Events</h1>
                <FilterButton options={['Ascending', 'Descending']} />
            </div>
            <div className={classes.wrapper}>
                <ProgramTable rows={[]} />
            </div>
        </div>
    )
};


export default Programs;


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: '600px',
        minHeight: '700px',
        background: '#FFFFFF',
        flex: 1,
        padding:  '20px',
        margin: '20px 0',
        transition: '1s ease',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            minWidth: '520px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            minWidth: '600px',
        },
    },
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'grid',
    },
    headerDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    header: {
        letterSpacing: '-0.1px',
        color: '#222222',
        fontSize:  '20px',
        fontWeight: 'bolder',
        padding: '10px 20px',
        opacity: 1,
    },
}));
