import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorredorService {
  // Propiedades
  baseURL : string = 'https://api5-h463.onrender.com'
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')


  constructor(private http:HttpClient) { }

  // Agregar corredor
  agregarCorredor(data): Observable<any> {
    let url = `${this.baseURL}/`

    return this.http.post(url, data)
      .pipe(catchError(this.errorManager))
  }

  // Obtener corredores
  getCorredores() {
    let url = `${this.baseURL}/`
    return this.http.get(url)
  }

  getCorredor(id): Observable<any> {
    let url = `${this.baseURL}/${id}`
    
    return this.http.get(url, { headers: this.headers })
      .pipe(map((res:Response) => {
        return res || {};
      }),
      catchError(this.errorManager))
  }

  // Actualizar corredor
  actualizarCorredor(id, data): Observable<any> {
    let url = `${this.baseURL}/${id}`

    return this.http.put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorManager))
  }

  // Eliminar corredor
  eliminarCorredor(id): Observable<any> {
    let url = `${this.baseURL}/${id}`

    return this.http.delete(url, { headers: this.headers })
      .pipe(catchError(this.errorManager))
  }

  // Manejador de errores
  errorManager(error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = error.error.message
    } 
    else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`

    }
    console.log(errorMessage)
    return throwError(() => errorMessage)
  }
}
