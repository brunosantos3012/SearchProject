import { DetalheResponse } from 'src/app/model/detalheResponse.model';
import { Builder } from 'builder-pattern';

export class SearchAllServiceStub {

    // public getItem() { }

    public static mockResponseBuscaNome(): DetalheResponse[] {
        return [
            Builder<DetalheResponse>()
                .codigo(851730)
                .build()
        ];
    }
}
