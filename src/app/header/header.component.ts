import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  test!: any[]

  constructor(private db: AngularFireDatabase){}

  ngOnInit(): void {
  }


  testFetch(){

    // this.db.list('cards').valueChanges().subscribe(res => {
    //   this.test = res
    //   console.log(this.test)
    // })
  }
}
