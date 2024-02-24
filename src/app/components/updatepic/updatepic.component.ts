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
    // Add visual indication when item is dragged over the drop target
    target.classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    // Remove visual indication when item leaves the drop target
    target.classList.remove('drag-over');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    // Remove visual indication when item is dropped
    target.classList.remove('drag-over');

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
       this.uploadFiles(files);
    }

    // const files = event.dataTransfer?.files;
    // if (files && files.length > 0) {
    //   this.saveFiles(files);
    // }
  }

  saveFiles(files: FileList) {
    // Perform operations to save the dropped files
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log('Dropped file:', file.name);
      // Here, you can upload the file to a server or process it as needed
    }
  }
  onDragStart(event: DragEvent) {
    // Add any necessary data to the drag event
    const target = event.target as HTMLImageElement; // Ensure the target is an <img> element
    const imageUrl = target.src; // Get the source URL of the image
    if (event.dataTransfer && imageUrl) {
      event.dataTransfer.setData('text/uri-list', imageUrl);
    }
  }

  onDragEnd(event: DragEvent) {
    // Perform any cleanup tasks after dragging ends
  }

  async uploadFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = `uploads/${file.name}`;
      const fileRef = this.fireStorage.ref(filePath);
      const task = this.fireStorage.upload(filePath, file);

      // Wait for the upload task to complete
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
