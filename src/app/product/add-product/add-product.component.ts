import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {CatoService} from '../../cato.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  alert:boolean=false
  addcat = new FormGroup({
    category:new FormControl(''),
    username:new FormControl('')
    //UserId:new FormControl(''),
    //Description:new FormControl(''),
    //Date:new FormControl('')
  })

  constructor(private resto:CatoService) { }

  ngOnInit(): void {
  }
  collect()
  {
    //console.warn(this.addcat.value);
    this.resto.saveResto(this.addcat.value).subscribe((result)=>{
      this.alert=true
    this.addcat.reset({})
    })
    
  }
  closeAlert(){
    this.alert=false
  }

}
