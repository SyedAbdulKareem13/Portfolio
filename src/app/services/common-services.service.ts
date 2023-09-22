import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {
  private apiUrl = 'http://localhost:3000';
  private studentapi = 'http://localhost:3000/api/getStudentData';
  private insertStudentdata = 'http://localhost:3000/api/insertStudent';
  private allDatastudent = 'http://localhost:3000/api/getAllStudents';
  private openApiEndpoint = 'rapidapi.com'; 

  constructor(private http: HttpClient) { }

  getHelloMessage() {
    return this.http.get<string>('http://localhost:3000');
  }

  getFieldData() {
    return this.http.get<any[]>(`${this.apiUrl}/api/fieldData`);
  }

  getStudentData(): Observable<any[]> {
    return this.http.get<any[]>(this.studentapi);
  }

  insertStudentData(studentData: any) {
    return this.http.post<any>(this.insertStudentdata, studentData);
  }

  getAllStudentData() {
    return this.http.get<any[]>(this.allDatastudent);
  }

  getStudentsByPage(page: number) {
    return this.http.get<any[]>(`http://localhost:3000/api/getAllStudents?page=${page}`);
  }

  updateStudent(studentData: any) {
    return this.http.post<any>('http://localhost:3000/api/editStudentDetail', studentData);
  }

  login(credentials: { email_id: string; password_hash: string }) {
    return this.http.post<any>('http://localhost:3000/api/loginEntry', credentials);
  }

  //OpenApi
  fetchDataFromOpenApi(): Observable<any> {
    return this.http.get<any>(this.openApiEndpoint);
  }
  
  
} 
