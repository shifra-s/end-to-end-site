import { Component, OnInit } from '@angular/core';
import { ContactService} from '../services/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

addContact(name,phone,email){

  const contact = <Contact>{
    name:name.value,
    email:email.value,
    phone:phone.value
  }

  return this.contactService.post(contact).subscribe(res => {
    console.log(res);
});

}
}
