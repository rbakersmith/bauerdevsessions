/// <reference path="../linq.js" />
/// <reference path="../linq.jquery.js" />

var CitiesDemo = {
    Cities: [],
    FetchCityData: function () {
        $.getJSON('/api/Cities', function (data) {
            CitiesDemo.Cities = data;
            CitiesDemo.BuildStateCombo();
        });
    },
    BuildStateCombo: function () {
        var citiesEnum = Enumerable.from(this.Cities);
        var statesGroup = citiesEnum.groupBy("x => x.State").orderBy("x => x.key()");
        var stateOptions = statesGroup.select(function (x) { return $("<option>").text(x.key()).data(x); })
            .tojQuery();
        stateOptions.appendTo("#States");
    },
    BuildCitiesGrid: function () {
        var citiesGrid = $("#CitiesGrid tbody");
        citiesGrid.find("tr").remove();

        var selectedItem = $("#States :selected");
        if (selectedItem.val() === 'Select a state...') {
            return;
        }
        var selectedState = selectedItem.data();

        var cityRows = selectedState
            .select(function (x) { return $("<tr><td>" + x.Name + "</td><td>" + x.Population + "</td></tr>"); })
            .tojQuery();
        cityRows.appendTo("#CitiesGrid tbody");
    }
};