import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CatoService} from '../../cato.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  alert:boolean=false;
  editcat = new FormGroup({
    category:new FormControl(''),
    username:new FormControl('')
    //UserId:new FormControl(''),
    //Description:new FormControl(''),
    //Date:new FormControl('')
  })
  constructor(private router:ActivatedRoute,private resto:CatoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentCat(this.router.snapshot.params.id).subscribe((result:any)=>{
      //console.warn("result",result)
      this.editcat = new FormGroup({
        category:new FormControl(result['category']),
        username:new FormControl(result['username'])
        
      })
    })
  }
  collection(){
    console.warn(this.editcat.value)
    this.resto.updatecat(this.router.snapshot.params.id,this.editcat.value).subscribe((result)=>
      //console.warn(result)
      this.alert=true
    )
  }
closeAlert(){
  this.alert=false;
}

}
