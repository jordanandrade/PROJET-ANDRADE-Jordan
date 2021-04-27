import { Injectable } from '@angular/core';
import { Action , State, StateContext,Selector } from '@ngxs/store';
import { AddReference,DelReference } from '../actions/panier.action';
import { PanierStateModel } from './panier-state-model';

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    panier : []
  } 
   
})
@Injectable()
export class PanierState {

    @Selector () 
    static getNbReference (state:PanierStateModel) {
        return state.panier.length;
    }

    @Action (AddReference)
        add(
            {getState, patchState } :  StateContext<PanierStateModel>, 
            { payload }: AddReference) {
            const state = getState();
            patchState({panier : [...state.panier, payload]});
    }

    @Action (DelReference)
    del(
            {getState, patchState } :  StateContext<PanierStateModel>, 
            { payload }: DelReference) {
            const state = getState();
            // TODO : Supprimer la référence passée en paramètre
            patchState({panier : [...state.panier]});
    }

}