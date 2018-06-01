import { FormPageActions } from '../actions';
import { SELECT_DEPARTMENT, SELECT_EMPLOYEE, SELECT_LOCATION } from '../constants';
import { DEPARTMENTS, getDepartmentById, getEmployeeById, getLocationById, isEmptyGuid, LOCATIONS } from '../data';
import { IAppState, IDepartment, IEmployee, IFormPageState, ILocation } from '../types';

export function formPageReducer(state: IAppState, action: FormPageActions): IAppState {
    if (!state) {
        return {} as any; // thanks dan https://stackoverflow.com/questions/36619093/why-do-i-get-reducer-returned-undefined-during-initialization-despite-pr
    }
    switch (action.type) {
        case SELECT_EMPLOYEE: {
            const employeeId = action.data;
            const employee = isEmptyGuid(employeeId) ? undefined : getEmployeeById(employeeId);
            return {
                ...state,
                page: {
                    ...state.page,
                    transfer: {
                        ...state.page.transfer,
                        employee
                    }
                }
            };
        }

        case SELECT_DEPARTMENT: {
            const departmentId = action.data;
            const isDepartmentEmpty = isEmptyGuid(departmentId);
            const department = isDepartmentEmpty ? undefined : getDepartmentById(departmentId);
            const locations =
                isDepartmentEmpty ?
                    LOCATIONS :
                    DEPARTMENTS.find(x => x.id === departmentId)!.locations!;
            const location = getLocation(state.page.transfer.location, locations, isDepartmentEmpty);
            const employees = getEmployeesData(state, location, department);
            const employee = getEmployee(state.page, location, department);

            return {
                ...state,
                page: {
                    ...state.page,
                    employees,
                    locations,
                    transfer: {
                        ...state.page.transfer,
                        department,
                        employee,
                        location,
                    }
                }
            };
        };

        case SELECT_LOCATION: {
            const locationId = action.data;
            const isLocationEmpty = isEmptyGuid(locationId)
            const location = isLocationEmpty ? undefined : getLocationById(locationId);
            const employees = getEmployeesData(state, location, state.page.transfer.department);
            const employee = getEmployee(state.page, location, state.page.transfer.department);

            return {
                ...state,
                page: {
                    ...state.page,
                    employees,
                    transfer: {
                        ...state.page.transfer,
                        employee,
                        location,
                    }
                }
            };
        }
    }

    return state;
}


function getEmployeesData({ data }: IAppState, location: ILocation | undefined, department: IDepartment | undefined): IEmployee[] {
    if (location) {
        return data.employees.filter(x => x.location!.id === location.id);
    }

    if (department) {
        return data.employees.filter(x => x.department!.id === department.id);
    }

    return data.employees;
}


function getLocation(currentLocation: ILocation | undefined, locations: ILocation[], isDepartmentEmpty: boolean): ILocation | undefined {
    let location: ILocation | undefined;
    if (isDepartmentEmpty) {
        location = currentLocation;
    } else if (location) {
        if (locations.findIndex(x => x.id === location!.id) !== -1) {
            location = currentLocation;
        }
        location = undefined;
    } else {
        location = undefined;
    }

    return location;
}

function getEmployee(state: IFormPageState, newLocation: ILocation | undefined, newDepartment: IDepartment | undefined): IEmployee | undefined {
    const currentEmployee = state.transfer.employee!;
    if (!currentEmployee) {
        return undefined;
    }

    if (newLocation) {
        return currentEmployee.location!.id === newLocation.id ? currentEmployee : undefined;
    }

    if (newDepartment) {
        return currentEmployee.department!.id === newDepartment.id ? currentEmployee : undefined;
    }

    return currentEmployee;
}