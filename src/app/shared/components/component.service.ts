import { Injectable } from "@angular/core";


interface FormDataInterface {
    id: string;
    label?: string;
    placeholder?: string;
}

export class FormData {
    id: string;
    label: string;
    placeholder: string;

    constructor(data: FormDataInterface) {
        this.id = data.id;
        this.label = data.label || '';
        this.placeholder = data.placeholder || '';
    }
}

@Injectable()
export class ComponentService {
    
}