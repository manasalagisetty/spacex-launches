import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { filterConstant } from '../../constants';
import {spacexLaunchesListSlice} from "../../duck/spacexLaunches";
import {getFilter} from "../../iguazuSelectors/spacexLaunchesSelecor";

const FilterMenu= () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();
    const {
        filter,
    } = useSelector(getFilter);

    const handleChange = (event, newValue) => {
        let filterValue;
        if(newValue == 0) filterValue = filterConstant.ALL;
        if(newValue == 1) filterValue = filterConstant.UPCOMING;
        if(newValue == 2) filterValue = filterConstant.PREVIOUS;
        if(newValue == 3) filterValue = filterConstant.SUCCESS;
        if(newValue == 4) filterValue = filterConstant.FAILURE;
        dispatch(spacexLaunchesListSlice.actions.updateFilter(filterValue));
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Upcoming" {...a11yProps(1)} />
                    <Tab label="Previous" {...a11yProps(2)} />
                    <Tab label="Success" {...a11yProps(3)} />
                    <Tab label="Failure" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default FilterMenu;