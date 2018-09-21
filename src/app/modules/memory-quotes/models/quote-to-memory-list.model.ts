import { QuoteToMemoryEntryModel } from './quote-to-memory-entry.model';
import {
    QuoteToMemoryListRequestModelInterface,
    QuoteToMemoryListResponseModelInterface
} from './interfaces/quote-to-memory-list-model.interface';
import { MatrixUser } from '../../../shared/models/matrix-common.model';


export class QuoteToMemoryListRequestModel implements QuoteToMemoryListRequestModelInterface {
    user: MatrixUser;
}

export class QuoteToMemoryListResponseModel implements QuoteToMemoryListResponseModelInterface {
    quotes: QuoteToMemoryEntryModel[] = [];
}


