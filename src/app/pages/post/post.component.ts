import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
post:any
id:any
constructor(
  private firebase:FirebaseService,
  private route: ActivatedRoute,){
  
}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.firebase.getPost(this.id).then((res)=>{
      this.post=res.data()
    })
  }


}
