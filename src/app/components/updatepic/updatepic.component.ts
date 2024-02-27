import { Component } from '@angular/core';

import { AngularFireStorage } from "@angular/fire/compat/storage"

@Component({
  selector: 'app-updatepic',
  templateUrl: './updatepic.component.html',
  styleUrls: ['./updatepic.component.css']
})
export class UpdateComponent {
  title = 'imageupload';

  constructor(private fireStorage:AngularFireStorage){}


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
      const filePath = `uploads/${file.name}`;
      const fileRef = this.fireStorage.ref(filePath);
      const task = this.fireStorage.upload(filePath, file);


      await task;

      console.log('File uploaded successfully:', filePath);
    }
  }



   async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
      const path = `${file.name}`;
      const uploadTask =await this.fireStorage.upload(path,file);
      const url = await uploadTask.ref.getDownloadURL();
      console.log(url);
    }
  }

}
