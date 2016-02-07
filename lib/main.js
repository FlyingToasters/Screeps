module.exports.loop = function () {
    
    
    var workerCap = 3;
    var room = Game.rooms["sim"];
    var worker = require('worker')();
    
	var sources = room.find(FIND_SOURCES);
	var firstspawn = Game.spawns.Spawn1;
	var creeps = room.find(FIND_CREEPS);
	for(var i in creeps){
	    worker.work(creeps[i], sources[0]);
	}
	
	createCreep();
	
	
	function createCreep(type){
	    if(getCreepCount()< workerCap){
	        var creep =  Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], null);
	        
	    }
	}
	
	function getCreepCount(){
	    var creeps = Game.rooms["sim"].find(FIND_CREEPS);
	    return creeps.length;
	}
	
	// Process scheduled events
	var schedule = require('event_scheduler');
    schedule.processActions();
    
    // Add events to schedule if not present
    var events = require("event_definitions");
    for(var i in events){
        var event = events[i];
        if(!Memory.EventRegistry || !Memory.EventRegistry[event.name]){
            schedule.registerAction(event.name, event.module, event.functionName, event.parameters, event.interval);
        }
    }
}
