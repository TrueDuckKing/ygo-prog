import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CacheResolverService {

  private cache = new Map<string, HttpResponse<any>>();

  constructor() {}

  set(key: string, value: HttpResponse<any>){
    console.log('Set cache key', key)
    this.cache.set(key, value)
  }

  get(key: string){
    const httpSavedResponse = this.cache.get(key)
    if(!httpSavedResponse) return null;
    return httpSavedResponse
  }
}
