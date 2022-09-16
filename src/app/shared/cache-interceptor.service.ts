import { Injectable } from "@angular/core"
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent, HttpResponse } from "@angular/common/http"
import { of, Observable, tap } from "rxjs";
import { CacheResolverService } from "./cache-resolver.service";

@Injectable()
export class CacheInterceptor implements HttpInterceptor{
  constructor(private cacheResolver: CacheResolverService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.method !== 'GET') {
      return next.handle(req)
    }
    const cachedResponse = this.cacheResolver.get(req.url)

    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next)
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheResolver.set(req.url, event)
        }
      })
    );
  }
}
