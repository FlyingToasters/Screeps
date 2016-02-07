module.exports = function () {
    return {
        work : function (creep, source) {
            // The following makes sure that crowding around the spawn doesn't occur when there are too many havesters
            creep.moveTo(source);
	        if(creep.carry.energy < creep.carryCapacity) { 
            	if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
        			creep.moveTo(source);
		        }
	        }
	        else {
                //console.log(Game.spawns.Spawn1);
        		if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			        creep.moveTo(Game.spawns.Spawn1);
		        }
	        }
        }
    }
}
