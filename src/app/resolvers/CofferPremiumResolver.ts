import { Injectable } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Resolve,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class CofferPremiumResolver implements Resolve<any | null>{
    constructor(
        private router: Router,
        private navController: NavController
        ) {}
    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any | null> {

        //TODO: Removed on implemented service Coffer Detail
        const fakeService: Observable<{isPremium: false; data: []}> = Observable.create((observer: any) => {
            const rdnumber = Math.floor(Math.random() * (2));
            observer.next ({ isPremium: rdnumber, data: [{
                id:1,
                title:'Title 1',
                price: 50,
                category:'Category 1',
                description:'Description 1'
            }] });
        });

        return fakeService.pipe(map(response => {
            const data = response?.data;
            const isPremium = response?.isPremium;

            if (data) {
              return {data, isPremium};
            } else {
                return null;
            }
        }));
    }
}
