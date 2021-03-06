import {NegociacaoParcial, Negociacao} from '../models/index';

export class NegociacaoService{
    async obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]>{
        return fetch('https://api-jrs-negociacoes.herokuapp.com/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            //.catch(err => console.log(err.message))
    }
}

export interface HandlerFunction{

    (res: Response): Response;
}