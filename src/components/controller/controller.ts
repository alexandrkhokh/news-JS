import AppLoader from './appLoader';
import { Callback, Endpoint, NewsApiResponse, SourcesApiResponse } from '../../types';

class AppController extends AppLoader {
    public getSources(callback: Callback<SourcesApiResponse>): void {
        super.getResp<SourcesApiResponse>({ endpoint: Endpoint.Sources }, callback);
    }

    public getNews(e: Event, callback: Callback<NewsApiResponse>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId != null) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<NewsApiResponse>(
                        {
                            endpoint: Endpoint.Everything,
                            options: { sources: sourceId },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
