import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';

import { AngularFireStorage } from "@angular/fire/compat/storage"

@Component({
  selector: 'app-updatepic',
  templateUrl: './updatepic.component.html',
  styleUrls: ['./updatepic.component.css']
})
export class UpdateComponent {
  imageUrl = '';
  data: { token: string | null; url: string } = { token: null, url: this.imageUrl };

  constructor(private fireStorage:AngularFireStorage,private userService: UserService, private router: Router){}


  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    target.classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    target.classList.remove('drag-over');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    target.classList.remove('drag-over');


    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
       this.uploadFiles(files);
    }

    const imageView = document.getElementById("img-view");
    if (imageView) {
      imageView.style.backgroundImage = `url(${this.imageUrl})`;
      imageView.textContent = "";
      imageView.style.border = "0" ;
    }




  }

  saveFiles(files: FileList) {

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log('Dropped file:', file.name);

    }
  }
  onDragStart(event: DragEvent) {

    const target = event.target as HTMLImageElement;
    const imageUrl = target.src;
    if (event.dataTransfer && imageUrl) {
      event.dataTransfer.setData('text/uri-list', imageUrl);
    }
  }

  onDragEnd(event: DragEvent) {

  }

  async uploadFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const path = `${file.name}`;
      const uploadTask =await this.fireStorage.upload(path,file);
      const url = await uploadTask.ref.getDownloadURL();
      this.imageUrl = url;
    }
  }



   async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
      const path = `${file.name}`;
      const uploadTask =await this.fireStorage.upload(path,file);
      const url = await uploadTask.ref.getDownloadURL();
      this.imageUrl = url ;
      const imageView = document.getElementById("img-view");
      if (imageView) {
        imageView.style.backgroundImage = `url(${this.imageUrl})`;
        imageView.textContent = "";
        imageView.style.border = "0" ;
      }
    }
  }
  doUpdatePic(){
    this.data.token = window.localStorage.getItem('tokenuser');
    this.data.url = this.imageUrl;
    this.userService.updatePic(this.data).subscribe(
      response => {
        console.log('Server Response:', response);
        this.router.navigate(['/profil']);
      },
      error => {
        console.error('Error:', error.error);
        this.router.navigate(['/profil']);

      }
    );
  }

}
