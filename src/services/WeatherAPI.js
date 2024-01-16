import locationList from './testLocation.json';

const GetLocation = () => {

    let locations;

    for (i=0; i < 5; i++) {
        const location = {
            Key: locationList[i].Key,
            Rank: locationList[i].Rank,
            LocalizedName: locationList[i].LocalizedName,
            EnglishName: locationList[i].EnglishName,
            Region: locationList[i].Region.EnglishName,
            Country: locationList[i].Country.EnglishName
        };
        locations.push(location);
    }
    
    return locations;
};

export default GetLocation;