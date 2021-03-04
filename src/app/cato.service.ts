import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatoService {
  url = "http://localhost:3000/posts"
  // url = "http://192.168.0.110:8081/getpromotionslist"

  headers = {

  }

  
  constructor(private http:HttpClient) { }
  setHttpHeaders() {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
  }
  getList(){
    return this.http.get(this.url);
    //console.warn("data")
  }
  saveResto(data:any){
    //console.warn("ser",data)
    return this.http.post(this.url,data)
  }
  delete(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentCat(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updatecat(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)

  }
}
