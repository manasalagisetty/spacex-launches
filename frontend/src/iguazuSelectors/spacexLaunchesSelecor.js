import get from 'lodash.get';

export const getIsLoading = state => {
    return get(state,'spacexLaunchesList.isLoading', false);
}

export const getSpacexLaunchesData = state => {
    return get(state,'spacexLaunchesList.spacexLaunches', []);
}

export const getFilter = state => {
    return get(state,'spacexLaunchesList.filter', 'all');
}

export const getError = state => {
    return get(state,'spacexLaunchesList.error', null);
}