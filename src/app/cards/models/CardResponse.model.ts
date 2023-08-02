import { BaseResponse } from '../../shared/models/BaseResponse.model';
import { Card } from './Card.model';

export interface CardResponse extends BaseResponse {
  results: Card[];
}
