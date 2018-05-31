import * as React from 'react';
import { IDepartment, IEmployee, ILocation } from '../types';
import { FormSelect } from './FormSelect';

export interface IFormPageProps {
    employees?: IEmployee[]; // why they are optional? thanks to mapStateToProps and mapDispatchToProps
    departments?: IDepartment[]; // why they are optional? thanks to mapStateToProps and mapDispatchToProps
    locations?: ILocation[]; // why they are optional? thanks to mapStateToProps and mapDispatchToProps
    onSelectEmployee?: (employeeId: string) => void;
    onSelectDepartment?: (departmentId: string) => void;
    onSelectLocation?: (locationId: string) => void;
}

export class FormPage extends React.Component<IFormPageProps> {
    public render() {
        return (
            <div className='form-page'>
                <h2>Form Page</h2>
                <form>
                    <FormSelect
                        label="Employee"
                        items={this.props.employees!}
                        onChange={this.props.onSelectEmployee!} />

                    <FormSelect
                        label="Deparment"
                        items={this.props.departments!}
                        onChange={this.props.onSelectDepartment!} />

                    <FormSelect
                        label="Location"
                        items={this.props.locations!}
                        onChange={this.props.onSelectLocation!} />
                </form>
            </div>
        )
    }
}