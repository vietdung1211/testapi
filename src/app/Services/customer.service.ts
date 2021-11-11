import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer.model';

@Injectable()
export class CustomerService {
	API = 'https://6183420391d76c00172d1892.mockapi.io/api/v1/angular';

  constructor(
		private http: HttpClient
		) {}

    getAll(): Observable<Customer[]>{
		return this.http.get<Customer[]>(this.API);
	}

	getById(id: number): Observable<any>{
		return this.http.get(`${this.API}/${id}`);
	}

	updateById(id: number, customer: Customer): Observable<Customer>{
		return this.http.put<Customer>(`${this.API}/${id}`, customer);
	}

	deleteById(id: number): Observable<any>{
		return this.http.delete<Customer>(`${this.API}/${id}`);
	}

	addNew(customer: Customer): Observable<Customer>{
		return this.http.post<Customer>(this.API, customer);
	}
}
