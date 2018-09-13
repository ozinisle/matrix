
import { MatrixContactModelInterface } from './interfaces/matrix-contact-model.interface';
import {
    MatrixAddressModel,
    MatrixPhoneModel
} from '../../../shared/models/matrix-common.model';


export class MatrixContactModel implements MatrixContactModelInterface {
    contactId: string;
    commonName: string;
    customIdentifier: string;
    firstName: string;
    middleName: string;
    lastName: string;
    address: MatrixAddressModel[];
    phone: MatrixPhoneModel[];
}

