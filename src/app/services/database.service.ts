import { element } from 'protractor';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import { Dish } from './../interfaces/dish';
import { Injectable, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
declare const firebase: any;

@Injectable()
export class DatabaseService {

    items: FirebaseListObservable<any[]>;
    user$: Observable<FirebaseAuthState>;
    user: any;
    storage: any;

    constructor(private af: AngularFire, private router: Router) {
        this.items = af.database.list('/');
        this.user$ = this.af.auth.asObservable();
        this.user$.subscribe(user => this.user = user)
        this.storage = firebase.storage();
    }

    // Uploads a file and returns his download URL
    uploadFile(file: File, element: ElementRef): Promise<any> {
        let ref = this.storage.ref('img/' + file.name);
        let task = ref.put(file);

        return new Promise((resolve, reject) => {
            task.on('state_changed',
                snap => {
                  let percentatge = (snap.bytesTransferred / snap.totalBytes) * 100;
                  element.nativeElement.style["width"]= percentatge + '%';
                 },
                err => reject('upload err: ' + err.message),
                () => resolve(task.snapshot.downloadURL)
            )
        });
    }


    addItem(item: any): void {
        item.user = this.user.auth.displayName;
        item.date = new Date().toJSON();
        this.items.push(item);
        this.router.navigate(['/'])
    }

    logIn(): void {
        this.af.auth.login()
    }

    logOut(): void {
        this.af.auth.logout();
    }


}
