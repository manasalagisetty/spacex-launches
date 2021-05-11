import React, { useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getSpacexLaunches } from '../../duck/spacexLaunches';
import {getIsLoading, getFilter, getSpacexLaunchesData, getError} from '../../iguazuSelectors/spacexLaunchesSelecor';
import Loader from "../../components/Loader/Loader";
import SpacexLaunchesList from "../../components/SpacexLaunchesList/SpacexLaunchesList";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import Error from "../../components/Error/Error";

const SpaceXLaunchesHOC = (props) => {
    const {
        spacexLaunches,
    } = props;
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading)
    const filter = useSelector(getFilter)
    const error = useSelector(getError)

    useEffect(() => {
        dispatch(getSpacexLaunches())
    }, [dispatch])

    return(
        <div>
            <FilterMenu />
            {!!isLoading && <Loader />}
            {error && (
                <Error error={error}/>
            )}
            {!!spacexLaunches.length && (
                <SpacexLaunchesList
                    spacexLaunches={spacexLaunches}
                    filter={filter}
                />
            )}
        </div>
    )
}

export const mapState = createStructuredSelector({
    spacexLaunches: getSpacexLaunchesData,
})

export default connect(mapState)(SpaceXLaunchesHOC);