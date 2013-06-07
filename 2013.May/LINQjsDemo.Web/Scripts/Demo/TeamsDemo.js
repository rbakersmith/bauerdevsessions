/// <reference path="../linq.js" />
/// <reference path="../linq.jquery.js" />

var TeamsDemo = {
    GetTeamArray: function () {
        var teamTableEnum = $("#teamTable tbody tr").toEnumerable();
        var teamEnum = teamTableEnum.select(function (x) {
            var team = x.find(".team").text();
            var city = x.find(".city").text();
            var state = x.find(".state").text();

            return { Team: team, City: city, State: state };
        });

        return teamEnum.toArray();
    }
};