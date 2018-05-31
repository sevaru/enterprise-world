import * as constants from '../constants';

export interface ISelectEmployee {
    type: constants.SELECT_EMPLOYEE;
    data: string;
}

export function selectEmployee(employeeId: string): ISelectEmployee {
    return {
        data: employeeId,
        type: constants.SELECT_EMPLOYEE,
    }
}

export interface ISelectDepartment {
    type: constants.SELECT_DEPARTMENT;
    data: string;
}

export function selectDepartment(departmentId: string): ISelectDepartment {
    return {
        data: departmentId,
        type: constants.SELECT_DEPARTMENT
    }
}

export interface ISelectLocation {
    type: constants.SELECT_LOCATION;
    data: string;
}

export function selectLocation(locationId: string): ISelectLocation {
    return {
        data: locationId,
        type: constants.SELECT_LOCATION,
    }
}

export type FormPageActions = 
    ISelectDepartment | ISelectEmployee | ISelectLocation;

