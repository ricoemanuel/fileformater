import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showRegistrationForm: boolean = false;

  constructor(private storage: Storage, private formBuilder: FormBuilder, private firebase: FirebaseService, private router:Router) { }
  passwordHidden: boolean = true;

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('registrationPassword');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }
  toggleRegistrationForm() {
    this.showRegistrationForm = !this.showRegistrationForm;
  }

  async onSubmit() {

    if (this.loginForm.valid) {
      this.firebase.login(this.loginForm.value).then(async usuario => {
        localStorage.setItem("currentUID", usuario.user.uid)
        console.log('na')
        this.router.navigate(["/blog"])
      }).catch(e => {
        if (e.code == "auth/invalid-email") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Este email es inválido',

          })

        } else if (e.code == "auth/user-not-found") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Este usuario no existe',

          })

        } else if (e.code == "auth/wrong-password") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La contraseña es incorrecta',

          })

        } else if (e.code == "auth/invalid-credential") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Correo o contraseña incorrectos',

          })
        }
      })
    }

  }
  img: any
  imgProfile: string = '../../../assets/usuario.png'
  setImg($event: any) {
    const file = $event.target.files[0];
    if (file) {
      this.img = $event

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgProfile = e.target.result

      }
      reader.readAsDataURL(file);
    }

  }
  simulate() {
    let button = document.getElementById("fileInput")
    button?.click()
  }
  async subirArchivo(imgevent: any, bucket: string) {
    const file = imgevent.target.files[0];
    const imgRef = ref(this.storage, `${bucket}/${file.name}`);

    let img = await uploadBytes(imgRef, file)
    return await getDownloadURL(img.ref)
  }
  recuperar() {
    let email = this.loginForm.value.email
    if (email !== '') {
      this.firebase.resetPassword(email).then((res) => {
        Swal.fire({
          icon: 'info',
          title: 'Se ha enviado un correo electrónico para recuperar la contraseña',
        });
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes ingresar tu email',

      })
    }

  }
}
