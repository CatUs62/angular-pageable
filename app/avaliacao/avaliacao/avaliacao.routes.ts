import { Routes } from "@angular/router";
import { AtualizarComponent } from "./atualizar/atualizar.component";
import { ListarComponent } from "./listar/listar.component";

export const AVALIACAO_ROUTES: Routes = [
    {
        path: 'edit/:id',
        component: AtualizarComponent
    },
    {
        path: 'listar',
        component: ListarComponent
    }
]