import { Component, OnInit } from '@angular/core';
import {CatoService} from '../../cato.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  constructor(private resto:CatoService) { }
  collection:any=[];

  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      console.warn(result)
      this.collection=result;
    })
  }
  delete(item:any){
    this.collection.splice(item-1,1)
  this.resto.delete(item).subscribe((result)=>{
    console.warn("result",result)
  })
  }

}
