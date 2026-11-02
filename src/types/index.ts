export type Languages = 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';

export type Countries =
    | 'ae'
    | 'ar'
    | 'at'
    | 'au'
    | 'be'
    | 'bg'
    | 'br'
    | 'ca'
    | 'ch'
    | 'cn'
    | 'co'
    | 'cu'
    | 'cz'
    | 'de'
    | 'eg'
    | 'fr'
    | 'gb'
    | 'gr'
    | 'hk'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'in'
    | 'it'
    | 'jp'
    | 'kr'
    | 'lt'
    | 'lv'
    | 'ma'
    | 'mx'
    | 'my'
    | 'ng'
    | 'nl'
    | 'no'
    | 'nz'
    | 'ph'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'sa'
    | 'se'
    | 'sg'
    | 'si'
    | 'sk'
    | 'th'
    | 'tr'
    | 'tw'
    | 'ua'
    | 'us'
    | 've'
    | 'za';

interface ApiStatus {
    status: 'error' | 'ok';
    code?: string;
    message?: string;
}

export interface NewsApiResponse extends ApiStatus {
    totalResult: number;
    articles: Article[];
}

export interface Source {
    id: string | null;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface SourcesApiResponse extends ApiStatus {
    sources: NewsSource[];
}

export interface NewsSource extends Source {
    description: string;
    url: string;
    category?: string;
    language?: Languages;
    country?: Countries;
}

export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
}

export type Callback<T> = (data: T) => void;

export type LoaderOptions = Readonly<{ apiKey: string }>;

export interface ApiQuery {
    sources: string;
    q: string;
    language: Languages;
    country: Countries;
    category: string;
}

export type RequestOptions = Partial<ApiQuery>;

export type SourceItem = Pick<NewsSource, 'id' | 'name'>;
