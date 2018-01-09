import { Component, OnInit } from '@angular/core';
import {ContenfulService} from "../../services/contenful.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  documentLink : any = '';
  _statusDocumentLink = false;

  constructor(private _contentService: ContenfulService) { }

  ngOnInit() {

    //beneficio
    this._contentService.getEntries({content_type: 'documentLink'})
      .then(entry => {
        this._statusDocumentLink = true;
        if( entry && entry['items'] && entry['items'].length > 0){
          this.documentLink = [];
          const items = entry['items'];
          for(let it of items){
            const key = it['fields']['documentId'];
            const value =  it['fields']['asset']['fields']['file']['url'];
            this.documentLink[key] = value;
          }
          console.log('this.documentLink',this.documentLink);
        }
      });
  }

}
