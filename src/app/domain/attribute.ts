export class Attribute {

    private attributeId: String
    private attributeName: String
    
    constructor(attributeId: String, attributeName: String ) {
        this.attributeName = attributeName
        this.attributeId = attributeId
    }

    public get name(): String {
        return this.attributeName
    }

    public get short(): String {
        return this.attributeId
    }

    public get id(): String {
        return this.attributeId
    }
  }