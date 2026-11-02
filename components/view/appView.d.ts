import { NewsApiResponse, SourcesApiResponse } from '../../types';
export declare class AppView {
    private readonly sources;
    private readonly news;
    constructor();
    drawNews(data: NewsApiResponse): void;
    drawSources(data: SourcesApiResponse): void;
}
export default AppView;
//# sourceMappingURL=appView.d.ts.map