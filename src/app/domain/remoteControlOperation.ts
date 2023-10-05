
export class RemoteControlOperation {

    private type: string
    private target: string
    private params: Array<string>

    constructor(type: string, target: string, parameters: Array<string>) {
        this.type = type
        this.target = target
        this.params = parameters
    }

    public getType(): string {
        return this.type
    }

    public getTarget(): string {
        return this.target
    }

    public getParameters(): Array<string> {
        return this.params
    }

    toJSON(): string {
        return JSON.stringify({
            type: this.type,
            target: this.target,
            params: this.params
        })
    }
}

export class OperationFactory {

    static createOperation(type: string, target: string, parameters: any): RemoteControlOperation {
        return new RemoteControlOperation(type, target, parameters)
    }

    static createOperationFromJSON(jsonstring: string): RemoteControlOperation {
        const parsedObject = JSON.parse(jsonstring)
        return new RemoteControlOperation(parsedObject.type, parsedObject.target, parsedObject.params)
    }
}

export const operationTypes = {
    openImage: 'openImage',
    closeImage: 'closeImage',
    createNPC: 'createNPC',
    startFight: 'startFight'
}