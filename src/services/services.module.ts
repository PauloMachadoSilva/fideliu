import 'rxjs/Rx';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { EmpresaService } from './cadastro/empresas/empresa.service';
import { UsuarioService } from './cadastro/usuarios/usuario.service';


@NgModule({
    declarations: [],
    imports: [
        HttpModule,
        HttpClientModule,
        IonicStorageModule.forRoot()
    ],
    entryComponents: [],
    providers: [
        EmpresaService,
        UsuarioService
    ]
})
export class ServicesModule { }