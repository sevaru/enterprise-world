import { formPageReducer } from '.';
import { selectDepartment } from '../actions';
import { IDepartment, IEmployee, IFormPageState, ILocation, IAppState } from '../types';

// #region Mocked data
const DUBNA: ILocation = {
    id: '01',
    name: 'Dubna',
    postCode: 0
};

const MOSCOW: ILocation = {
    id: '02',
    name: 'Moscow',
    postCode: 1
};

const PITER: ILocation = {
    id: '03',
    name: 'Piter',
    postCode: 2
};

const LOCATIONS = [
    DUBNA,
    MOSCOW,
    PITER
];

const LUXSTAFF_ID = '02';
const IAD_ID = '01';

const IAD: IDepartment = {
    id: IAD_ID,
    locations: [DUBNA, PITER],
    name: 'IAD'
};

const LUXSTAFF: IDepartment = {
    id: LUXSTAFF_ID,
    locations: [MOSCOW, PITER],
    name: 'LuxStaff'
};

const DEPARTMENTS: IDepartment[] = [
    LUXSTAFF,
    IAD
];

const NIKITA: IEmployee = {
    department: IAD,
    id: '01',
    location: DUBNA,
    name: 'Nikita'
};

const TEMA: IEmployee = {
    department: IAD,
    id: '02',
    location: DUBNA,
    name: 'Tema'
};

const LESHA: IEmployee = {
    department: IAD,
    id: '03',
    location: DUBNA,
    name: 'Lesha'
};

const PASHA: IEmployee = {
    department: IAD,
    id: '04',
    location: MOSCOW,
    name: 'Pasha'
};

const ARTUR: IEmployee = {
    department: LUXSTAFF,
    id: '05',
    location: PITER,
    name: 'Artur'
};

const EVGENII: IEmployee = {
    department: LUXSTAFF,
    id: '05',
    location: MOSCOW,
    name: 'Evgenii'
};

const EMPLOYEES: IEmployee[] = [
    NIKITA,
    TEMA,
    LESHA,
    PASHA,
    ARTUR,
    EVGENII,
];
// #endregion

describe('reducers should reduce ♥', () => {
    it('filter locations and employees on department selection', () => {
        const state: IAppState = {
            data: {} as any,
            page: {
                
                departments: DEPARTMENTS,
                employees: EMPLOYEES,
                locations: LOCATIONS,
                transfer: {
                    department: undefined,
                    employee: undefined,
                    location: undefined
                }
            },
        };

        const expectedState: IAppState = {
            data: {} as any,
            page: {
                departments: DEPARTMENTS,
                employees: EMPLOYEES.filter(x => x.department!.id === LUXSTAFF_ID),
                locations: LUXSTAFF.locations!,
                transfer: {
                    department: LUXSTAFF,
                    employee: undefined,
                    location: undefined
                }
            }            
        };

        const newState = formPageReducer(state, selectDepartment(LUXSTAFF_ID));

        expect(newState.data.employees).toEqual(expectedState.data.employees);
    });
})
