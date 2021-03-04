import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {CatoService} from '../../cato.service'

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {

  alert:boolean=false
  addcat = new FormGroup({
    promotionName:new FormControl(''),
    promotionDesc:new FormControl(''),
    startDate:new FormControl(''),
    endDate:new FormControl(''),
    updatedby:new FormControl(''),
    updatedAt:new FormControl(''),
    totalSavings:new FormControl(''),
    itemMinPrice:new FormControl(''),
    sscid:new FormControl('')


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
      console.log(this.addcat.value)
      this.alert=true
    this.addcat.reset({})
    })
    
  }
  closeAlert(){
    this.alert=false
  }

}
