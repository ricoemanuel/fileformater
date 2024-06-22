import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PostFormComponent } from '../../components/post-form/post-form.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: any[]=[];
  modalRef?: BsModalRef;
  user:string|null=localStorage.getItem("currentUID")
  constructor(private modalService: BsModalService, private firebase:FirebaseService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.firebase.getposts().subscribe((res)=>{
      this.posts=res
      console.log(this.posts)
    })
  }

  

 

  deletePost(post: any) {
   this.firebase.deletePost(post.id)
  }
  addPost(template: TemplateRef<void>){
    this.editingPost=null
this.openModal(template)
  }
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  editingPost:any
  editPost(template:TemplateRef<void>, post:any){
    this.editingPost=post
    this.openModal(template)
  }
  getCols() {
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      return 1;
    }
    if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
      return 2;
    }
    return 3;
  }
}
