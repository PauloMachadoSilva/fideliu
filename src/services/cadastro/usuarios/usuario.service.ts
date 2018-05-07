import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../Api/api.service';
import { usuario } from '../../../models/usuario/usuario.models';

@Injectable()
export class UsuarioService {
    private _apiCadastroFidelio = this._apiService.get('contaCorrente').v1.hmg;
    
    constructor (
        private _apiService: ApiService,
        private _httpClient: Http,        
    ) {
        
    }

    /**
     * Verificando empresas
     * @author Paulo Eduardo
     */
    consultaUsuarioPorCpf (): Observable<usuario.models.IUsuario[]> {
        // const codCli = this._credentialService.user.user_id;
        const cpfCliente = 123;
        
        return this
            ._httpClient
            .get(`${this._apiService}/consulta/${cpfCliente}`)
            .retry(3)
            .map(response => response.json() as usuario.models.IUsuario[]);
    }

   
}
