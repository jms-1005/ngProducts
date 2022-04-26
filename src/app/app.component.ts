import { Component, OnInit } from '@angular/core';
import { NodeserviceService } from './services/nodeservice.service';
import { Product } from './interfaces/prroducts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngProducts';


}
