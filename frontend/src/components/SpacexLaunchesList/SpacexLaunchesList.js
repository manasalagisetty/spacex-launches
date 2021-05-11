import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import SpacexCardDetails from '../SpacexCardDetails/SpacexCardDetails';
import { filterConstant } from '../../constants';

const SpacexLaunchesList = ({ spacexLaunches, filter }) => {
    const classes = useStyles();
    const filteredSpacexLaunches = getFilteredSpacexLaunches({ spacexLaunches, filter });
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList} style={{ width: '80%' }}>
                {!!filteredSpacexLaunches && filteredSpacexLaunches.map((spacexLaunch) => (
                    <SpacexCardDetails
                        key={spacexLaunch.flight_number}
                        spacexLaunch={spacexLaunch}
                    />
                ))}
            </GridList>
        </div>
    );
};

SpacexLaunchesList.propTypes = {
    spacexLaunches: PropTypes.arrayOf(PropTypes.object).isRequired,
    filter: PropTypes.string.isRequired,
};

export default SpacexLaunchesList;

const getFilteredSpacexLaunches = ({ spacexLaunches, filter }) => {
    switch(filter) {
        case '':
        case filterConstant.ALL:
            return spacexLaunches;
        case filterConstant.PREVIOUS:
            return spacexLaunches.filter(launch => launch.upcoming === false);
        case filterConstant.UPCOMING:
            return spacexLaunches.filter(launch => launch.upcoming === true);
        case filterConstant.SUCCESS:
            return spacexLaunches.filter(launch => launch.launch_success === true);
        case filterConstant.FAILURE:
            return spacexLaunches.filter(launch => launch.launch_success === false);
        default:
            return spacexLaunches
    }
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: '750px',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));
