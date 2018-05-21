export class Skill {

    id: number;
    name: String;
    skillGroupId: number;
    be: String;
  
    dice1: String;
    dice2: String;
    dice3: String;
    constructor(dataObject: Object) {
      
      this.skillGroupId = dataObject['type'];
      this.id = dataObject['id'];
      this.name = dataObject['name'];
      this.be = dataObject['behinderung'];
      this.dice1 = dataObject['dice1'];
      this.dice2 = dataObject['dice2'];
      this.dice3 = dataObject['dice3'];
  
    }
  }