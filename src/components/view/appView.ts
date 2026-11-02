import News from './news/news';
import Sources from './sources/sources';
import { NewsApiResponse, SourcesApiResponse } from '../../types';

export class AppView {
    private sources: Sources;
    private news: News;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsApiResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesApiResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
