import AppLoader from './appLoader';
import { Callback, NewsApiResponse, SourcesApiResponse } from '../../types';
declare class AppController extends AppLoader {
    getSources(callback: Callback<SourcesApiResponse>): void;
    getNews(e: Event, callback: Callback<NewsApiResponse>): void;
}
export default AppController;
//# sourceMappingURL=controller.d.ts.map