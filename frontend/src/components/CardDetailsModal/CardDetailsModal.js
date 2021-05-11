import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const CardDetailsModal = ({spacexLaunch}) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Mission Name: {spacexLaunch.mission_name}</h2>
            <p id="simple-modal-description">
                Rocket Type: {spacexLaunch.rocket.rocket_type}
            </p>
            <p id="simple-modal-description">
                Launch Year: {spacexLaunch.launch_year}
            </p>
            <p id="simple-modal-description">
                Description: {spacexLaunch.details}
            </p>
            <video width="400" controls>
                <source src={spacexLaunch.links.video_link} type="video/mp4" />
                    Your browser does not support HTML video
            </video>
            <h2 id="simple-modal-title">
                <Link href={spacexLaunch.links.article_link} target="_blank">
                    View Full Article
                </Link>
            </h2>
        </div>
    );

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                View Details
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default CardDetailsModal;