
export class Cloud {
    constructor(token?: string);
    fetchJobs(options, next?:(err: Error|null, jobs:any[]) => void);
    fetchJob(id: number, next?:(err:Error|null, job) => void);
    createJob(job, next?:(err:Error|null, job?) => void);
}

export class MissionControl {
    constructor(token?: string);
    append(key:string, data, next?:(err:Error|null, event?) => void);
    history(key:string, next?:(err:Error|null, events:any[]) => void);
}

export class Backend {
    constructor(token?: string);
    getDevice(secret:string, next?:(err:Error|null, device?) => void);
    createDevice(data, next?:(err:Error|null, device?) => void);
    getDeviceRoutines(uid:string, next?:(err:Error|null, routines?) => void);
    createRoutine(data, next?:(err:Error|null, routine?) => void);
    bindRoutine(uid:string, name:string, next?:(err:Error|null) => void);
    unbindRoutine(uid:string, name:string, next?:(err:Error|null) => void);
}