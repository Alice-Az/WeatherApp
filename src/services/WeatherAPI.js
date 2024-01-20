
const SetLocationData = (data) => {
    return {
        Key: data.Key,
        Rank: data.Rank,
        LocalizedName: data.LocalizedName,
        EnglishName: data.EnglishName,
        Region: data.Region.EnglishName,
        AdministrativeArea: data.AdministrativeArea.ID,
        Country: data.Country.EnglishName
    };
};

export const GetLocations = async (input) => {

    // let url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Ix64mBi5uAs2vwkVj5cXyWSFL0eKO3cz&q=" + input;
    let url = "http://localhost:5018/api/Location/location";

    return await fetch(url)
    .then(response => response.json())
    .then(data => {

        let locations = [];

        for (let i= 0; i < data.length; i++) {

            let location = SetLocationData(data[i]);
            locations.push(location);

            if (locations.length === 5) break;
        }

        console.log(locations);

        return locations;
    });
};

export const GetGeolocationResult = async (lat, long) => {

    // let url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Ix64mBi5uAs2vwkVj5cXyWSFL0eKO3cz&q=${lat}%2C${long}`;
    let url = "http://localhost:5018/api/Location/geolocationResult";

    return await fetch(url)
    .then(response => response.json())
    .then(data => {
        let location = SetLocationData(data);

        return location;
    });
};

export const GetWeather = async (locationKey) => {

    // let url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=Ix64mBi5uAs2vwkVj5cXyWSFL0eKO3cz&details=true`;
    let url = 'http://localhost:5018/api/Weather/weather';

    return await fetch(url)
    .then(response => response.json())
    .then(data => {

        let currentWeather = {
            WeatherText: data[0].WeatherText,
            WeatherIcon: data[0].WeatherIcon,
            Temperature: `${data[0].Temperature.Metric.Value} °${data[0].Temperature.Metric.Unit}`,
            RealFeelTemperature: `${data[0].RealFeelTemperature.Metric.Value} °${data[0].RealFeelTemperature.Metric.Unit}`,
            RelativeHumidity: `${data[0].RelativeHumidity} %`,
            DewPoint: `${data[0].DewPoint.Metric.Value} °${data[0].DewPoint.Metric.Unit}`,
            Wind: `${data[0].Wind.Direction.Degrees} ${data[0].Wind.Direction.Localized}, ${data[0].Wind.Speed.Metric.Value} ${data[0].Wind.Speed.Metric.Unit}`,
            UVIndex: `${data[0].UVIndex} (${data[0].UVIndexText})`,
            Precipitation: `${data[0].PrecipitationSummary.Precipitation.Metric.Value} ${data[0].PrecipitationSummary.Precipitation.Metric.Unit}`,
            Visibility: `${data[0].Visibility.Metric.Value} ${data[0].Visibility.Metric.Unit}`,
            Pressure: `${data[0].Pressure.Metric.Value} ${data[0].Pressure.Metric.Unit}`
        };

        return currentWeather;
    });
};

export const GetForecastHourly = async (locationKey) => {

    // let url = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=Ix64mBi5uAs2vwkVj5cXyWSFL0eKO3cz&metric=true`;
    let url = "http://localhost:5018/api/Weather/forecastHourly";

    return await fetch(url)
    .then(response => response.json())
    .then(data => {

        let forecastsHours = [];

        for (let i= 0; i < data.length; i++) {

            let newDT = `${data[i].DateTime.substring(0,10)} - ${data[i].DateTime.substring(11,16)}`;

            let forecastHourly = {
                DateTime: newDT,
                WeatherIcon: data[i].WeatherIcon,
                WeatherText: data[i].IconPhrase,
                Temperature: `${data[i].Temperature.Value} °${data[i].Temperature.Unit}`
            };

            forecastsHours.push(forecastHourly);

        };

        return forecastsHours;
    });
};

export const GetForecastDaily = async (locationKey) => {

    // let url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=Ix64mBi5uAs2vwkVj5cXyWSFL0eKO3cz&metric=true`;
    let url = "http://localhost:5018/api/Weather/forecastDaily";

    return await fetch(url)
    .then(response => response.json())
    .then(data => {

        let newData = data.DailyForecasts;
        let forecastsDays = [];

        for (let i= 0; i < newData.length; i++) {

            let forecastDaily = {
                Date: newData[i].Date.substring(0,10),
                TemperatureMin: `${newData[i].Temperature.Minimum.Value} °${newData[i].Temperature.Minimum.Unit}`,
                TemperatureMax: `${newData[i].Temperature.Maximum.Value} °${newData[i].Temperature.Maximum.Unit}`,
                WeatherIcon: newData[i].Day.Icon,
                WeatherText: newData[i].Day.IconPhrase
            };

            forecastsDays.push(forecastDaily);

        };

        console.log(forecastsDays);

        return forecastsDays;
    });


};