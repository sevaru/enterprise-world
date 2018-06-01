import * as React from 'react';
import { IDepartment, IEmployee, ILocation, ITransfer } from '../types';
import { FormSelect } from './FormSelect';

export interface IFormPageProps {
    transfer?: ITransfer;
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
                        label="Deparment"
                        value={this.props.transfer!.department}
                        items={this.props.departments!}
                        onChange={this.props.onSelectDepartment!} />

                    <FormSelect
                        label="Location"
                        value={this.props.transfer!.location}
                        items={this.props.locations!}
                        onChange={this.props.onSelectLocation!} />

                    <FormSelect
                        label="Employee"
                        value={this.props.transfer!.employee}
                        items={this.props.employees!}
                        onChange={this.props.onSelectEmployee!} />
                </form>
            </div>
        )
    }
}