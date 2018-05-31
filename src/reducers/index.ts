import { FormPageActions } from '../actions';
import { EMPTY_GUID, SELECT_DEPARTMENT, SELECT_EMPLOYEE, SELECT_LOCATION } from '../constants';
import { EMPLOYEES } from '../data';
import { IData, IEmployee, IFormPageState } from '../types';


const sampleEmployee: IEmployee = {
    department: null as any,
    id: '1',
    location: null as any,
    name: 'hallo',
};

export function dataReducer(state: IData, actions: {}): IData {
    if (!state) {
        return {} as any;
    }
    return state;
}

export function formPageReducer(state: IFormPageState, action: FormPageActions): IFormPageState {
    if (!state) {
        return {} as any; // thanks dan https://stackoverflow.com/questions/36619093/why-do-i-get-reducer-returned-undefined-during-initialization-despite-pr
    }
    switch (action.type) {
        case SELECT_EMPLOYEE:
            return {
                ...state,
                transfer: {
                    ...state.transfer,
                    employee: sampleEmployee
                }
            };

        case SELECT_DEPARTMENT: {
            const departmentId = action.data;

            const employees =
                departmentId === EMPTY_GUID ?
                    EMPLOYEES :
                    EMPLOYEES.filter(x => x.department!.id === departmentId);


            return {
                ...state,
                employees,
                transfer: {
                    ...state.transfer,
                    employee: undefined,
                }
            }
        };

        case SELECT_LOCATION: {
            // TODO: department is selected location and employee to 
            const locationId = action.data;

            const employees =
                locationId === EMPTY_GUID ?
                    EMPLOYEES :
                    EMPLOYEES.filter(x => x.location!.id === locationId);

            return {
                ...state,
                employees,
                transfer: {
                    ...state.transfer,
                    employee: undefined,
                    // department,
                }
            };
        }
    }

    return state;
}