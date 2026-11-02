import { Callback, Endpoint, LoaderOptions, RequestOptions } from '../../types';
interface GetRespParams {
    endpoint: Endpoint;
    options?: RequestOptions;
}
declare class Loader {
    private readonly baseLink;
    private readonly options;
    constructor(baseLink: string, options: LoaderOptions);
    protected getResp<T>({ endpoint, options }: GetRespParams, callback?: Callback<T>): void;
    private errorHandler;
    private makeUrl;
    private load;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map