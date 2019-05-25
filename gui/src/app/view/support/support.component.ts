import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  // faqList = [
  //   {
  //     question : 'Is there some way to prevent these proxy tools from editing the data?',
  //     answer : 'The main threat these proxy tools pose is editing the information sent from the client to the server.' +
  //     'One way to prevent it is to sign the message sent fromthe client with a Java Applet downloaded onto the client machine.' +
  //     'Since the applet we developed will be the one validating the certificate and not the browser,' +
  //     'proxy tool will not be able to get in between the client andthe server with a fake certificate.' +
  //     'The applet will reject the fake certificate.' +
  //     'The public key of this certificate can then be used to digitally sign each message sent' +
  // 'between the client and the server.' +
  // 'An attacker would then have to replace the embedded certificate in the applet with a fake certificate to succeed '
  // + '- that raises the barrier for the attacker.'
  //       }
  // ];

  constructor() { }

  ngOnInit() {
  }

}
