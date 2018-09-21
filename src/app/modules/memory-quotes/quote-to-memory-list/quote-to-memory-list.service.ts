import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteToMemoryListResponseModelInterface } from '../models/interfaces/quote-to-memory-list-model.interface';
import { MatrixHttpService } from '../../../security/services/matrix-http.service';
import { MatrixConstants } from '../../../shared/constants/matrix.constants';

@Injectable()
export class QuoteToMemoryListService {

  constructor(private matrixHttp: MatrixHttpService) { }

  getQuoteToMemoryList(): Observable<QuoteToMemoryListResponseModelInterface> {
    return this.matrixHttp.doUnencryptedGet(MatrixConstants.url.getQuoteToMemoryListApiUrl);
  }
}
