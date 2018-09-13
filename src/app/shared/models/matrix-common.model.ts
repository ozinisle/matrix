import { MatrixPhoneType } from './types/matrix-common.types';
import {
    MatrixPhoneModelInterface,
    MatrixBaseAddressModelInterface,
    MatrixLandMarkModelInterface,
    MatrixAddressModelInterface
} from './interface/matrix-common-models.interface';

export class MatrixBaseAddressModel implements MatrixBaseAddressModelInterface {
    doorNumber: string;
    street: string;
    area: string;
    village: string;
    town: string;
    city: string;
    zip: string;
}

export class MatrixPhoneModel implements MatrixPhoneModelInterface {
    type: MatrixPhoneType;
    phoneNumber: number;
    isPrimary: boolean;
}

export class MatrixAddressModel extends MatrixBaseAddressModel implements MatrixAddressModelInterface {
    landmarks: MatrixLandMarkModel[];
    isPrimary: boolean;
}

export class MatrixLandMarkModel extends MatrixBaseAddressModel implements MatrixLandMarkModelInterface {
    landMarkName: string;
}





