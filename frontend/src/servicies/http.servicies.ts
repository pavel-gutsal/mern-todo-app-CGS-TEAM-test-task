import axios from 'axios';

type Config = {
  url: string;
  id?: string;
  headers?: {
    Authorization: string;
  }
};

export class HttpSerivce {
  baseUrl: string | undefined;

  fetchingService: any;

  apiVersion: string;

  constructor(baseUrl = 'http://localhost:8000', fetchingService = axios, apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string, id?: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}${id ? `/${id}` : ''}`;
  }

  async get(config: Config) {
    const response = await this.fetchingService.get(
      this.getFullApiUrl(config.url),
      {headers: config.headers},
    );
    return response.data;
  }

  async create(config: Config, post: any) {
    const response = await this.fetchingService.post(
      this.getFullApiUrl(config.url),
      post,
      {headers: config.headers},
    );
    return response.data;
  }

  async update(config: Config, updates: any) {
    const response = await this.fetchingService.put(
      this.getFullApiUrl(config.url, config.id),
      updates,
      {headers: config.headers},
    );
    return response.data;
  }

  async delete(config: Config) {
    const response = await this.fetchingService.delete(
      this.getFullApiUrl(config.url, config.id),
      {headers: config.headers}
    );
    return response.data;
  }
}
