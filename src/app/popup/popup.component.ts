import { Component , Input} from '@angular/core';
import { Dictionary } from '../data/generics';
import { isType } from '../data/generics';
import { USERS,User } from '../data/users';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})

export class PopupComponent {

  @Input() fields: any[] = []
  headers: string[] = []
  formHTML: SafeHtml = '';
  showPopup: boolean = false;

  constructor(private sanitizer: DomSanitizer ){
    this.fields = USERS
  }
  ngOnInit() {
    if (this.fields && this.fields.length) {
      const rawHtml = this.generateFullHTMLForm('userForm', this.fields);
      console.log('Generated Form HTML:', rawHtml); // Log to check if HTML is correct
      this.formHTML = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
    }
  }
  open() {
    this.showPopup = true;
  }

  close() {
    this.showPopup = false; 
  }
  generateFullHTMLForm(formName: string, list: any[]): string {
    let html = `<form name="${formName}">`;
  
    const lastUser = list[list.length - 1];
    const newId = lastUser ? lastUser.id + 1 : 1;
  
    const fieldTemplate = {
      id: newId,
      name: '',
      email: '',
      role: '', // or leave for select
      status: '', // or leave for select
      createdAt: new Date(), // or leave empty
      lastLogin: new Date(), // or leave empty
      isEmailVerified: false,
      avatarUrl: { imageLink: '' }
    };
  
    for (const [key, value] of Object.entries(fieldTemplate)) {
      const label = `<label for="${key}">${this.capitalize(key)}:</label>`;
  
      if (key === 'id') {
        html += `
          ${label}
          <input type="number" id="${key}" name="${key}" value="${value}" disabled><br>`;
      } else if (typeof value === 'string') {
        html += `
          ${label}
          <input type="text" id="${key}" name="${key}" value=""><br>`;
      } else if (typeof value === 'number') {
        html += `
          ${label}
          <input type="number" id="${key}" name="${key}" value=""><br>`;
      } else if (typeof value === 'boolean') {
        html += `
          ${label}
          <input type="checkbox" id="${key}" name="${key}"><br>`;
      } else if (value instanceof Date) {
        const dateValue = value.toISOString().split('T')[0]; // use today's date
        html += `
          ${label}
          <input type="date" id="${key}" name="${key}" value="${dateValue}"><br>`;
      } else if (key === 'role') {
        const roles = ['admin', 'customer', 'manager'];
        const options = roles
          .map(role => `<option value="${role}">${role}</option>`)
          .join('');
        html += `
          ${label}
          <select id="${key}" name="${key}">${options}</select><br>`;
      } else if (key === 'status') {
        const statuses = ['active', 'inactive', 'banned'];
        const options = statuses
          .map(status => `<option value="${status}">${status}</option>`)
          .join('');
        html += `
          ${label}
          <select id="${key}" name="${key}">${options}</select><br>`;
      } else if (typeof value === 'object' && value && 'imageLink' in value) {
        html += `
          ${label}
          <input type="text" id="${key}" name="${key}" placeholder="Enter image URL"><br>`;
      }
    }
  
    html += '</form>';
    return html;
  }
  
  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  submit() {
    const form: HTMLFormElement | null = document.forms.namedItem('userForm');
    if (!form) return;

    const formData = new FormData(form);
    const data: Record<string, any> = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    form.querySelectorAll('input[type="checkbox"]').forEach(input => {
      const checkbox = input as HTMLInputElement;
      data[checkbox.name] = checkbox.checked;
    });

    console.log('Submitted form data:', data);
    this.close();
  }
}
