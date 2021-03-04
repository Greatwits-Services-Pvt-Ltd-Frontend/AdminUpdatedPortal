import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {CatoService} from '../../cato.service'

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {

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
