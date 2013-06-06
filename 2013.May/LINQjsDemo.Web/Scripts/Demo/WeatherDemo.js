/// <reference path="../linq.js" />

var WeatherDemo = {
    WeatherData: [],
    AverageTemp: 0.0,
    MinTemp: 0.0,
    MaxTemp: 0.0,
    FetchWeather: function () {
        $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%22ASXX0112%22%20and%20u%3d'c'&format=json",
            function (data) { WeatherDemo.WeatherData = data.query.results.channel.item; });
    },
    GetStats: function () {
        var weatherEnum = Enumerable.from(this.WeatherData.forecast);
        this.AverageTemp = weatherEnum.average("x => parseInt(x.high)");
        this.MinTemp = weatherEnum.min("x => parseInt(x.low)");
        this.MaxTemp = weatherEnum.max("x => parseInt(x.high)");
        $("#weatherStats").text('Min: ' + this.MinTemp + ', Max: ' + this.MaxTemp + ', Average: ' + this.AverageTemp);
    }
};