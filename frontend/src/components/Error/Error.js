import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Error = ({error}) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    Please Try Again!
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Error Message: {error}
                </Typography>
            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
});

export default Error;
