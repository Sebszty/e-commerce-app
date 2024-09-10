export class Connection {
    private _baseUrl: string = 'https://fakestoreapi.com/'
    private _apiKey?: string

    get baseUrl(): string {
        return this._baseUrl
    }

    get apiKey(): string | undefined {
        return this._apiKey
    }
}
