import News from './news/news';
import Sources from './sources/sources';
import { NewsApiResponse, SourcesApiResponse } from '../../types';

export class AppView {
    private readonly sources: Sources;
    private readonly news: News;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsApiResponse): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesApiResponse): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
