import { Injectable, HttpService } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class GithubService {
    constructor(private readonly httpService: HttpService) { }

    getGitRepos(lang: string, page: number = 1): Observable<any[]> {
        return this.httpService.get(
            `https://api.github.com/search/repositories?q=language:${lang}&order=desc&page=${page}&per_page=100`
        ).pipe(
            map((result: any) => {
                return result['data']['items'].map(i => {
                    return {
                        name: i['name'],
                        url: i['html_url']
                    }
                });
            }),
            catchError(e => {
                console.error(e);
                return of([]);
            })
        );
}
}
