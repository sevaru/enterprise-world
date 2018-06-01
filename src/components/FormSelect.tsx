import * as React from "react";
import { IObject } from "../types";

export interface IFormSelectProps {
    label: string;
    items: IObject[];
    value?: IObject;
    onChange(id: string): void; // thanks no implicit null
}

export class FormSelect extends React.Component<IFormSelectProps> {
    public render() {
        const value = this.props.value ? this.props.value.id : undefined;
        return (
            <div>
                <label>{this.props.label}</label>
                <select onChange={this.onChange} value={value}>
                    {this.props.items.map(x => (<option key={x.id} value={x.id}>{x.name}</option>))}
                </select>
            </div>
        );
    }

    private onChange = (e: React.FormEvent<HTMLSelectElement>) => {
        this.props.onChange(e.currentTarget.value);
    }
}