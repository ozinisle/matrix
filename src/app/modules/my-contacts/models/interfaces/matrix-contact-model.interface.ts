import {
    MatrixAddressModelInterface,
    MatrixPhoneModelInterface
} from '../../../../shared/models/interface/matrix-common-models.interface';


export interface MatrixContactModelInterface {
    contactId: string;
    commonName: string;
    customIdentifier: string;
    firstName: string;
    middleName: string;
    lastName: string;
    address: MatrixAddressModelInterface[];
    phone: MatrixPhoneModelInterface[];
}

