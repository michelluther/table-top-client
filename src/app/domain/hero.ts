export class Hero {
  id: number;
  name: string;
  life: number;
  stamina: number;
  lifeLeft: number;

  constructor(dataObject: Object){
  	this.id = dataObject['id'];
  	this.name = dataObject['name'];
    this.life = dataObject['life'];
  	this.lifeLeft = dataObject['life_left'];
  	this.stamina = dataObject['stamina'];
  }
}