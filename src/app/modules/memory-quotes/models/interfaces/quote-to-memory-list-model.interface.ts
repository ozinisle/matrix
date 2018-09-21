import { QuoteToMemoryEntryModelInterface } from './quote-to-memory-entry-model.interface';
import { MatrixUserInterface } from '../../../../shared/models/interface/matrix-common-models.interface';

export interface QuoteToMemoryListRequestModelInterface {
    user: MatrixUserInterface;
}

export interface QuoteToMemoryListResponseModelInterface {
    quotes: QuoteToMemoryEntryModelInterface[];
}


