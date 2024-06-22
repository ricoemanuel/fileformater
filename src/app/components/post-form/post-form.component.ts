import { Component, Input, OnInit, OnChanges, SimpleChanges, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() post: any;

  postForm: FormGroup;
  isEdit: boolean = false;
  img: any;
  imgPreview: any = "../../../assets/pre-img.jpg";
  text:string="<div><p>aewfwef	wef</p></div>"
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '200px',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Escriba el cuerpo del post...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    
};
  constructor(
    public modalRef: BsModalRef,
    private fb: FormBuilder,
    private firebase: FirebaseService,
    private storage: Storage,
    private cdr: ChangeDetectorRef
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      introduction: ['', Validators.required],
      imageDescription: ['', Validators.required],
      urlTitle: ['', Validators.required,],
    });
  }

  ngOnInit() {
    if (this.post) {
      this.isEdit = true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['post'] && changes['post'].currentValue) {
      this.patchFormValues();
    }
  }

  ngAfterViewInit() {
    if (this.post) {
      this.patchFormValues();
    }
  }

  patchFormValues() {
    this.postForm.patchValue({
      title: this.post.title,
      introduction: this.post.introduction,
      imageDescription: this.post.imageDescription,
      urlTitle: this.post.urlTitle
    });

    console.log(this.post)
    this.postForm.get('description')?.setValue(this.post.description);

    this.imgPreview = this.post.image || this.imgPreview;

    // Forzar la detección de cambios después de un breve retraso
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

  setImg($event: any) {
    const file = $event.target.files[0];
    if (file) {
      this.img = $event;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgPreview = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }

  simulate() {
    let button = document.getElementById("fileInput");
    button?.click();
  }

  async subirArchivo(imgevent: any, bucket: string) {
    const file = imgevent.target.files[0];
    const imgRef = ref(this.storage, `${bucket}/${file.name}`);

    let img = await uploadBytes(imgRef, file);
    return await getDownloadURL(img.ref);
  }

  async savePost() {
    if (this.postForm.valid) {
      const newPost = this.postForm.value;
      if (this.img) {
        newPost.image = await this.subirArchivo(this.img, 'publicaciones');
      } else if (this.post) {
        newPost.image = this.post.image; // Usar la imagen existente si no se actualiza
      }
      await this.firebase.setPost(newPost.urlTitle, newPost);

      this.modalRef.hide();
    }
  }
}
