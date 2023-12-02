import { DataManagerService } from 'src/assets/service/dataManagerService/data-manager.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-container-router',
  templateUrl: './container-router.component.html',
  styleUrls: ['./container-router.component.scss']
})
export class ContainerRouterComponent {
  loaded: boolean = false;

  constructor(private dataManagerService: DataManagerService) {
    this.dataManagerService.getObservableData.subscribe((loaded) => {
      this.loaded = loaded;
    });
  }
}
