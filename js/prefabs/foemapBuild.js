var foemapBuild = function(game,obj,enemySpots){
	console.log("foemapBuild: create");
	Phaser.Sprite.call(this,game,obj.x,obj.y,'collider',0);

    this.size = obj.properties.size;
    // Type is where to start in the array of objects in the Tiled layer
    // called "enemySpots"
    this.type = obj.type;
    this.active = false;
    this.activeFoes = 0;
    
    this.scale.set(obj.width,obj.height);
    
    this.enemySpots = [];
    for(let i = this.type; i < this.size+this.type; i++) {
        console.log('foemapBuild: '+enemySpots[i]);
        let foe = enemySpots[i]; // The field 'enemySpots' is an object layer in json
        
        this.enemySpots.push(foe);
    }

    game.sound.stopAll();
};

foemapBuild.prototype = Object.create(Phaser.Sprite.prototype);
foemapBuild.prototype.constructor = foemapBuild;

foemapBuild.prototype.update = function() {
    if(this.activeFoes == 0) {
       this.active = false;
    }
}