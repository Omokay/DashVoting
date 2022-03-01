import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatars from '../../components/avatarGroup/avatarGroup.component';
import FilterButton from "../filterButton/filterButton.component";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: '600px',
        height: 'auto',
        flex: '1',
        background: '#FFFFFF',
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
    table: {
        margin: '20px 0',
        height: 'max-content',
        width: '100%',
        border: 'none',
        padding: '10px 0',
        backgroundColor: 'white',
    },
    tableHead: {
        textAlign: 'center',
        letterSpacing: 0,
        color: '#222222',
        fontWeight: 'bolder',
        fontSize: '16px',
        opacity: 1,

        [theme.breakpoints.down('md')]: {
            minWidth: '50px',
        },
    },
    tableHeader: {
        minHeight: '50px',
        background: '#F5F6F9',
        borderRadius: '4px',
        opacity: 1,
        border: 'none',
    },
    tableBody:  {
        border: 'none',
    },
    tableList: {
        height: '50px',
        border: '1px solid #F3F3F3',
        borderRadius: '4px',
        opacity: 1,
        width: '100%',
    },
    tableData: {
        // padding: '10px 30px',
        // minWidth: '80px',
        textAlign: 'center',
    },
    br: {
        height: '3px',
        display: 'hidden',
    }
}));


const ProgramSummary = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div className={classes.headerDiv}>
                    <h1 className={classes.header}>Program Summary</h1>
                    <FilterButton options={['Default', 'Ascending', 'Descending']}/>
                </div>
                <div className={classes.wrapper}>

                    <table className={classes.table}>
                        <thead>

                        <div style={{
                            width: '100%',
                            margin: '0 auto',
                            padding: '10px 20px',
                            textAlign: 'center',
                            letterSpacing: 0,
                            color: '#222222',
                            fontWeight: 'bolder',
                            fontSize: '16px',
                            opacity: 1,
                            height: 'auto',
                            background: '#F5F6F9',
                            borderRadius: '4px',
                            border: 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{margin: '0 5px'}} >#</div>
                            <div style={{margin: '0 5px'}}>Program</div>
                            <div style={{margin: '0 5px'}}>Options</div>
                            <div style={{margin: '0 5px'}}>Voting Period</div>
                            <div style={{margin: '0 5px'}}>Voting Cost</div>
                            <div style={{margin: '0 5px'}}>Status</div>
                        </div>
                        </thead>

                        <tbody className={classes.tableBody}>

                        <div className={classes.br}/>

                        <div style={{
                            height: 'auto',
                            padding: '10px 20px',
                            border: '1px solid #F3F3F3',
                            borderRadius: '4px',
                            opacity: 1,
                            width: '100%',
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{margin: '0 5px'}}>A012</div>
                            <div style={{margin: '0 5px'}}>Amazon Website</div>
                            <div style={{margin: '0 5px'}}>
                                <Avatars />
                            </div>
                            <div style={{margin: '0 5px'}}></div>
                            <div style={{margin: '0 5px'}}></div>
                            <div style={{margin: '0 5px'}}></div>
                        </div>

                        <div className={classes.br}/>

                        <div style={{
                            height: 'auto',
                            padding: '10px 20px',
                            border: '1px solid #F3F3F3',
                            borderRadius: '4px',
                            opacity: 1,
                            width: '100%',
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{margin: '0 5px'}}>A012</div>
                            <div style={{margin: '0 5px'}}>Amazon Website</div>
                            <div style={{margin: '0 5px'}}>
                                <Avatars />
                            </div>
                            <div style={{margin: '0 5px'}}></div>
                            <div style={{margin: '0 5px'}}></div>
                            <div style={{margin: '0 5px'}}></div>
                        </div>

                        <div className={classes.br}/>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProgramSummary;
