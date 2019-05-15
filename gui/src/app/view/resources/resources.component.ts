import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';





@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  status = false;
  iframeList: any = [];

  videoList = ['https://youtu.be/bYuq73KN9E8', 'https://youtu.be/zJegAtJOOc8'];

  linkList = [
    {
      title: 'A1 Injection',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A1-Injection'
    },
    {
      title: 'A2 Broken Authentication',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication'
    },
    {
      title: 'A3 Sensitive Data Exposure',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure'
    },
    {
      title: 'A4 XXE',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)'
    },
    {
      title: 'A5 Broken Access Control',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control'
    },
    {
      title: 'A6 Security Misconfiguration',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration'
    },
    {
      title: 'A7 XSS',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)'
    },
    {
      title: 'A8 Insecure Deserialization',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization'
    },
    {
      title: 'A9 Using Components with Known Vulnerabilities',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities'
    },
    {
      title: 'A10 Insufficient Logging&Monitoring',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A10-Insufficient_Logging%26Monitoring'
    }

  ];

  constructor(
    private embedService: EmbedVideoService
  ) {
    this.videoList.forEach(video => {
      this.iframeList.push(this.embedService.embed(video));
    });
  }

  ngOnInit() {
  }

}
