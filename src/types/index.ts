export interface IAppState {
    formPage: IFormPageState;
    data: IData;    
}

export interface IData {
    employees: IEmployee[];
    locations: ILocation[];
    departments: IDepartment[];
}

export interface IFormPageState {
    transfer: ITransfer;
    employees: IEmployee[];
    locations: ILocation[];
    departments: IDepartment[];
}

export interface ITransfer {
    employee?: IEmployee;
    department?: IDepartment;
    location?: ILocation;
}

export interface IObject {
    id: string;
    name: string;
}

export interface IEmployee extends IObject {
    department?: IDepartment;
    location?: ILocation;
}
export interface IDepartment extends IObject {
    locations?: ILocation[];
}
export interface ILocation extends IObject {
    postCode?: number;
}