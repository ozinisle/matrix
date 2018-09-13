import { MatrixPhoneType } from '../types/matrix-common.types';

export interface MatrixAddressModelInterface extends MatrixBaseAddressModelInterface {
    landmarks: MatrixLandMarkModelInterface[];
    isPrimary: boolean;
}

export interface MatrixLandMarkModelInterface extends MatrixBaseAddressModelInterface {
    landMarkName: string;
}

export interface MatrixBaseAddressModelInterface {
    doorNumber: string;
    street: string;
    area: string;
    village: string;
    town: string;
    city: string;
    zip: string;
}

export interface MatrixPhoneModelInterface {
    type: MatrixPhoneType;
    phoneNumber: number;
    isPrimary: boolean;
}



