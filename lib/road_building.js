/*
 * This module is intended to be used with the event scheduler 
 * to make sure roads are always present in the current room
 */
module.exports = (function(){
    var room = Game.rooms["sim"]
    var storeRoads = function(){
        var utils = require('utils');
        var roadLocations = [];
        var roads = room.find(FIND_STRUCTURES, utils.isARoad);
        for(var i in roads){
            road = roads[i];
            roadLocation = {x: road.pos.x, y:road.pos.y}
            roadLocations.push(roadLocation);
        }
        Memory.roadPositions = roadLocations;
    }
    
    var constructRoads = function(){
        roadPositions = Memory.roadPositions;
        for(var i in roadPositions){
            roadPosition = roadPositions[i];
            room.createConstructionSite(roadPosition.x, roadPosition.y, STRUCTURE_ROAD);
        }
    }
    
    var publicAPI = {};
    publicAPI.storeRoads = storeRoads;
    publicAPI.constructRoads = constructRoads;
    return publicAPI;
})()
