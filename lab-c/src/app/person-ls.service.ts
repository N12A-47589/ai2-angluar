import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonLsService {
  readonly KEY = 'stored-people-data';

  constructor() {}

  public getAll(): Person[] {
    const storedData = localStorage.getItem(this.KEY);
    return storedData ? JSON.parse(storedData) : [];
  }

  public getPerson(index: number): Person {
    const allPeople = this.getAll();
    return allPeople[index];
  }

  public addPerson(person: Person): void {
    const allPeople = this.getAll();
    allPeople.push(person);
    localStorage.setItem(this.KEY, JSON.stringify(allPeople));
  }

  public deletePerson(index: number): void {
    const allPeople = this.getAll();
    allPeople.splice(index, 1);
    localStorage.setItem(this.KEY, JSON.stringify(allPeople));
  }
}
