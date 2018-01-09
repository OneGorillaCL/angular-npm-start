import { Injectable } from '@angular/core';
import {createClient} from "contentful";
import {environment} from "../environments/environment";

@Injectable()
export class ContenfulService {

  private client = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken
  });

  getEntries = (query?: object): Promise<any>  => {
    return this.client.getEntries(query);
  }

  getEntry = (id?: string): Promise<any>  => {
    return this.client.getEntry(id);
  }

  constructor() { }

}
