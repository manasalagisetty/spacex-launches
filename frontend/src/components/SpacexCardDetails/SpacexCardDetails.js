import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardDetailsModal from "../CardDetailsModal/CardDetailsModal";

const SpacexCardDetails = ({ spacexLaunch }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {spacexLaunch.flight_number}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={`Mission Name: ${spacexLaunch.mission_name}`}
                subheader={`Rocket Name: ${spacexLaunch.rocket.rocket_name}`}
            />
            <hr />
            <CardMedia
                className={classes.media}
                style={{backgroundSize: "contain"}}
                image={spacexLaunch.links.mission_patch_small}
                title="Paella dish"
            />
            <hr />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Launch Site Name: {spacexLaunch.launch_site.site_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Launch Year: {spacexLaunch.launch_year}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {!!spacexLaunch.launch_success &&
                <IconButton aria-label="add to favorites">
                    <CheckCircleIcon />
                </IconButton>}
                {!spacexLaunch.launch_success &&
                <IconButton aria-label="add to favorites">
                    <ErrorIcon />
                </IconButton>}
                <CardDetailsModal spacexLaunch={spacexLaunch}/>
            </CardActions>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '10px',
        width: '300px',
        border: 'solid',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default SpacexCardDetails;
