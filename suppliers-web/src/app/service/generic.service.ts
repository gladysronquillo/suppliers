import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GenericService<T>{

  constructor(
    protected http: HttpClient,
    @Inject(String) protected url: string
  ) { }

  findAll() {
    return this.http.get<T[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<T>(`${this.url}/${id}`);
  }

  save(t: T) {
    return this.http.post(this.url, t);
  }

  update(t: T) {
    return this.http.put(this.url, t);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
