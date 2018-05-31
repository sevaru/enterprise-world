import { connect, Dispatch } from 'react-redux';

import * as actions from '../actions';
import { FormPage, IFormPageProps } from '../components/FormPage';
import { EMPTY_GUID } from '../constants';
import { IAppState, IObject } from '../types';


function createEmpty(): IObject {
    return {
        id: EMPTY_GUID,
        name: ' ',
    };
}

export function mapStateToProps(state: IAppState): IFormPageProps {
    // TODO: move it to reducer {
    const employees = state.formPage.employees.length ? state.formPage.employees : state.data.employees;
    const departments = state.formPage.departments.length ? state.formPage.departments : state.data.departments;
    const locations = state.formPage.locations.length ? state.formPage.locations : state.data.locations;
    // }
    return {
        departments: [createEmpty(), ...departments],
        employees: [createEmpty(), ...employees],
        locations: [createEmpty(), ...locations],
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.FormPageActions>): IFormPageProps {
    return {
        onSelectDepartment: (departmentId: string) => dispatch(actions.selectDepartment(departmentId)),
        onSelectEmployee: (employeeId: string) => dispatch(actions.selectEmployee(employeeId)),
        onSelectLocation: (locationId: string) => dispatch(actions.selectLocation(locationId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
