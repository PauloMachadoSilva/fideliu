import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable()
export class ApiService {
    constructor (

    ) {

    }

    get (serviceName: string): {
        v1: {
            prd: string,
            hmg: string
        }
    } {
        if (!environment.api[serviceName]) {
            throw new Error('O serviço desejado não existe ou não foi mapeado');
        }

        return environment.api[serviceName];
    }
}
