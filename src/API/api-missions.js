const url = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async() => {
    const response = fetch(url)
    .then(response => response.json())
    .catch(error => {
        throw (error);
    });
    return response;
}

export default fetchMissions;