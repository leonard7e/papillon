// Mona JavaScript Basic File
var app = angular.module("papillon", []);
app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[[');
    $interpolateProvider.endSymbol(']]}');
});
