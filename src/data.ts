import { EMPTY_GUID } from './constants';
import { IDepartment, IEmployee, ILocation, ITransfer } from './types';

export const LOCATIONS = Array(10).fill(1).map((_, i) => createLocation(i));
export const DEPARTMENTS = Array(5).fill(1).map((_, i) => createDepartment(i));
export const EMPLOYEES = Array(100).fill(1).map((_, i) => createEmployee(i));

export function getSomeTransfer(): ITransfer {
    const employee = getRandom(EMPLOYEES);
    return {
        department: employee.department,
        employee,
        location: employee.location,
    }
}

function createDepartment(id: number): IDepartment {
    const obj = {
        id: id.toString(),
        locations: getSample(LOCATIONS),
        name: `Department ${id}`,
    };

    return obj;
}


function createLocation(id: number): ILocation {
    return {
        id: id.toString(),
        name: `Location ${id}`,
        postCode: id * 100,
    }
}

function createEmployee(id: number): IEmployee {
    const department = getRandom(DEPARTMENTS);
    return {
        department,
        id: id.toString(),
        location: getRandom(department.locations!),
        name: `Employee ${id}`,
    };
}

function getRandom<T>(items: T[]): T {
    return items[random(0, items.length)];
}

function getSample<T>(items: T[], count: number = random(1, items.length)): T[] {
    if (items.length <= count) {
        return items;
    }

    const indexes = items.map((_, i) => i).sort(() => 0.5 - Math.random()).slice(0, count);

    return indexes.map(index => items[index]);
}

function random(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
}

export function getDepartmentById(departmentId: string): IDepartment | undefined {
    return DEPARTMENTS.find(x => x.id === departmentId);
}

export function getEmployeeById(employeeId: string): IEmployee | undefined {
    return EMPLOYEES.find(x => x.id === employeeId);
}

export function getLocationById(locationId: string): ILocation | undefined {
    return LOCATIONS.find(x => x.id === locationId);
}

export function isEmptyGuid(id: string): boolean {
    return EMPTY_GUID === id;
}