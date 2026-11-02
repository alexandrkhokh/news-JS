import AppLoader from './appLoader';
import { NewsApiResponse, SourcesApiResponse } from '../../types';

class AppController extends AppLoader {
    public getSources(callback: (data: SourcesApiResponse) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            (data: NewsApiResponse | SourcesApiResponse) => {
                if ('sources' in data) {
                    callback(data as SourcesApiResponse);
                }
            }
        );
    }

    public getNews(e: Event, callback: (data: NewsApiResponse) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId != null) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        (data: NewsApiResponse | SourcesApiResponse) => {
                            if ('articles' in data) {
                                callback(data as NewsApiResponse);
                            }
                        }
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
