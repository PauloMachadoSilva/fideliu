
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmpresaService {
    //private _apiCadastroFidelio = this._apiService.get('contaCorrente').v1.hmg;

    // canInvestorWithdraw: boolean | {};

    constructor (
       
    ) {
        // é necessário saber de antemão se o usuário solicitou uma retirada, por isso
        // já computamos este atributo
        // this
        //     .checkInvestorWitdrawRequest()
        //     .subscribe(
        //         data => {
        //             this.canInvestorWithdraw = data && data.length ? false : true;
        //         },
        //         err => {
        //             this.canInvestorWithdraw = {
        //                 erro: 'mensagem de erro'
        //             };
        //         }
        //     );
    }

    /**
     * Verificando empresas
     * @author Paulo Eduardo
     */
    // consultaEmpresPorCnpj (): Observable<PedidoRetirada.models.IPedidoRetirada[]> {
    //     const codCli = this._credentialService.user.user_id;

    //     return this
    //         ._httpClient
    //         .get(`${this._apiContaCorrente}/retirada/consulta/${codCli}`)
    //         .retry(3)
    //         .map(response => response.json() as PedidoRetirada.models.IPedidoRetirada[]);
    // }

   
}
