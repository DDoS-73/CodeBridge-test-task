import { BaseResponse } from './BaseResponse.model';
import { Article } from './Article.model';

export interface ArticlesResponse extends BaseResponse {
  results: Article[];
}
