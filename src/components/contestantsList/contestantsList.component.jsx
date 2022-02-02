import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'grid',
        margin: '0 auto',
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
        height: 'auto',
        width: '100%',
        border: 'none',
        backgroundColor: 'white',
    },
    tableHead: {
        textAlign: 'center',
        letterSpacing: 0,
        color: '#222222',
        fontWeight: '500',
        fontSize: '14px',
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
    tableText: {
        margin: '0 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    br: {
        height: '3px',
        display: 'hidden',
    }
}));

const ContestantsList = () => {

    const classes = useStyles();

    return (
        <>
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
                        <div className={classes.tableHead} >#</div>
                        <div className={classes.tableHead}>
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;

                        </div>
                        <div className={classes.tableHead}>Name&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;
                        </div>
                        <div className={classes.tableHead}>Codename &nbsp;&nbsp;&nbsp;</div>
                        <div className={classes.tableHead}></div>
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
                        <div className={classes.tableText}>A012</div>
                        <div className={classes.tableText}>
                            <Avatar />
                        </div>
                        <div className={classes.tableText}>Omoke Chuku</div>
                        <div className={classes.tableText}>OC</div>
                        <div className={classes.tableText}>
                            {/*Icon*/}
                        </div>
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
                        <div className={classes.tableText}>A012</div>
                        <div className={classes.tableText}>
                            <Avatar />
                        </div>
                        <div className={classes.tableText}>Omoke Chuku</div>
                        <div className={classes.tableText}>OC</div>
                        <div className={classes.tableText}>
                            {/*Icon*/}
                        </div>
                    </div>

                    <div className={classes.br}/>

                    </tbody>
                </table>
            </div>

        </>
    )
};

export default ContestantsList;