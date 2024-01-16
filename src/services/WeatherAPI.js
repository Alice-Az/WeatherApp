import locationList from './testLocation.json';
import weatherCurrent from './testWeather.json';

export const GetLocations = async (input) => {

    let url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Ix64mBi5uAs2vwkVj5cXyWSFL0eKO3cz&q=" + input;

    return await fetch(url)
    .then(response => response.json())
    .then(data => {

        let locations = [];

        for (let i= 0; i < data.length; i++) {

            let location = 
            {
                Key: data[i].Key,
                Rank: data[i].Rank,
                LocalizedName: data[i].LocalizedName,
                EnglishName: data[i].EnglishName,
                Region: data[i].Region.EnglishName,
                AdministrativeArea: data[i].AdministrativeArea.ID,
                Country: data[i].Country.EnglishName
            };
            
            locations.push(location);

            if (locations.length === 5) break;
        }

        console.log(locations);

        return locations;
        }
        // for (let i=0; i < locationList.length; i++) {

        //     let location = {
        //         Key: locationList[i].Key,
        //         Rank: locationList[i].Rank,
        //         LocalizedName: locationList[i].LocalizedName,
        //         EnglishName: locationList[i].EnglishName,
        //         Region: locationList[i].Region.EnglishName,
        //         Country: locationList[i].Country.EnglishName
        //     };
    
        //     locations.push(location);
    
        //     if (locations.length === 5) break;
        // };
    );

};

export const GetWeather = () => {

    let currentWeather = {
        WeatherText: weatherCurrent[0].WeatherText,
        WeatherIcon: weatherCurrent[0].WeatherIcon,
        Temperature: `${weatherCurrent[0].Temperature.Metric.Value} °${weatherCurrent[0].Temperature.Metric.Unit}`,
        RealFeelTemperature: `${weatherCurrent[0].RealFeelTemperature.Metric.Value} °${weatherCurrent[0].RealFeelTemperature.Metric.Unit}`,
        RelativeHumidity: weatherCurrent[0].RelativeHumidity,
        DewPoint: weatherCurrent[0].DewPoint.Metric.Value,
        Wind: `${weatherCurrent[0].Wind.Direction.Degrees} ${weatherCurrent[0].Wind.Direction.Localized}, ${weatherCurrent[0].Wind.Speed.Metric.Value} ${weatherCurrent[0].Wind.Speed.Metric.Unit}`,
        UVIndex: `${weatherCurrent[0].UVIndex} (${weatherCurrent[0].UVIndexText})`,
        Precipitation: `${weatherCurrent[0].PrecipitationSummary.Precipitation.Metric.Value} ${weatherCurrent[0].PrecipitationSummary.Precipitation.Metric.Unit}`,
        Visibility: `${weatherCurrent[0].Visibility.Metric.Value} ${weatherCurrent[0].Visibility.Metric.Unit}`,
        Pressure: `${weatherCurrent[0].Pressure.Metric.Value} ${weatherCurrent[0].Pressure.Metric.Unit}`
    };

    return currentWeather;

};