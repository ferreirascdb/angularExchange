import { Injectable } from "@angular/core";
import { criptoType } from "../types/cripto.type";
import { HttpClient } from "@angular/common/http";
import { response } from "express";
import {map} from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CriptoService{
    criptoResponse: criptoType = {
    code: '',
    codein:'',
    name: '',
    high:'',
    low: '',
    varBid: '',
    pctChange : '',
    bid: '',
    ask: '',
    timestamp: '',
    create_date: '',
    };
    constructor(private readonly httpClient: HttpClient){}
    getCripto(parMoedas: string) {
        return this.httpClient
            .get<any>(`https://economia.awesomeapi.com.br/json/last/${parMoedas}?token=db99419e0e877e389f66c1eecf95a3496cb7be5b138c0654f6c3414afef5a111`)
            .pipe(
         map((response) => response) // o acesso ao campo específico é feito no componente
        );
    }
    
}