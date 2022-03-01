import {makeStyles} from "@material-ui/core/styles";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FilterButton from "../filterButton/filterButton.component";
import CustomPagination from "../pagination/pagination.component";




const PendingReqTable = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.headerDiv}>
                <h1 className={classes.header}>Registrations</h1>
                {/*<FilterButton options={['Ascending', 'Descending']} />*/}
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
                        <div style={{margin: '0 5px'}}>Contact Person</div>
                        <div style={{margin: '0 5px'}}>Email Address</div>
                        <div style={{margin: '0 5px'}}>Phone Number</div>
                        <div style={{margin: '0 5px'}}>Reg Date</div>
                        <div style={{margin: '0 5px',}}></div>
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
                        <div style={{margin: '0 5px'}}>PayAttitude</div>
                        <div style={{margin: '0 5px'}}>Omoke Chuku</div>
                        <div style={{margin: '0 5px'}}>chuku.omoke@gmail.com</div>
                        <div style={{margin: '0 5px'}}>08105470291</div>
                        <div style={{margin: '0 5px',}}>16-08-21</div>
                        <div style={{margin: '0 5px', cursor: 'pointer',}}>
                            <MoreVertIcon />
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
                        <div style={{margin: '0 5px'}}>A012</div>
                        <div style={{margin: '0 5px'}}>Big Brother Naija</div>
                        <div style={{margin: '0 5px'}}>Snr Man Juga</div>
                        <div style={{margin: '0 5px'}}>chuku.omoke@gmail.com</div>
                        <div style={{margin: '0 5px'}}>08105470291</div>
                        <div style={{margin: '0 5px',}}>16-08-21</div>
                        <div style={{margin: '0 5px', cursor: 'pointer',}}>
                            <MoreVertIcon />
                        </div>
                    </div>

                    <div className={classes.br}/>

                    </tbody>
                </table>
            </div>

            <div className={classes.paginate}>
                <CustomPagination />
            </div>

        </div>
    )
};


export default PendingReqTable;


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: '600px',
        minHeight: '700px',
        height: 'auto',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
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
    paginate:{
        position: 'absolute',
        bottom: 50,
        justifySelf: 'flex-end',
        right: 50,
    },
    wrapper: {
        width: '100%',
        height: 'auto',
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
        height: 'auto',
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