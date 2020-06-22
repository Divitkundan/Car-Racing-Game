class AlignGrid{
		constructor(config){
    	this.config=config
      if(!config.scene){
      	return
      
      }
    	if(!config.rows){
      	config.rows=5
      }
      if(!config.cols){
      	config.cols=5
      }
    	if(!config.width){
      
      	config.width=game.config.width
      }
      
      this.scene=config.scene
      this.cw=config.width/config.cols
      this.ch=config.height/config.rows
    }
		show(){
      
    	this.graphics=this.scene.add.graphics()
      this.graphics.lineStyle(2,0xffffff)
      
      for(let i=0;i<this.config.width;i+=this.cw){
      		this.graphics.moveTo(i,0)
        	this.graphics.lineTo(i,this.config.height)
      
      }
      for(let i=0;i<this.config.height;i+=this.ch){
      		this.graphics.moveTo(0,i)
        	this.graphics.lineTo(i,this.config.height)
      
      }
      
      this.graphics.strokePath()
      //console.log("showww")
    }


}