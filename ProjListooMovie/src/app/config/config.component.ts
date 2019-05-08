import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = {
        listoomovieUrl: data['listoomovie'],
        textfile:  data['textfile']
    });
}

}
