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
    return {
        departments: [createEmpty(), ...state.page.departments],
        employees: [createEmpty(), ...state.page.employees],
        locations: [createEmpty(), ...state.page.locations],
        transfer: state.page.transfer,
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
