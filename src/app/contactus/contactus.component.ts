import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contactus',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  showSuccess = false;
  showError = false;
  address:any = environment.ADDRESS;
  sendMessage(form: any) {
    if (form.invalid) {
      alert("Please fill all required fields.");
      return;
    }

    const formData = {
      fullName: form.value.fullName,
      email: form.value.email,
      phone: form.value.phone,
      company: form.value.company,
      service: form.value.service,
      details: form.value.details
    };

    const SERVICE_ID = environment.SERVICE_ID;
    const TEMPLATE_ID = environment.TEMPLATE_ID;
    const PUBLIC_KEY = environment.PUBLIC_KEY;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response: EmailJSResponseStatus) => {
        this.showSuccess = true;
        this.showError = false;
        form.reset();
      })
      .catch((error) => {
        this.showError = true;
        this.showSuccess = false;
      });
  }

  closePopup() {
    this.showSuccess = false;
    this.showError = false;
  }

}
