import { Injectable } from '@angular/core';
import { USERS,User } from '../data/users';


@Injectable({
  providedIn: 'root'
})
export class FromServiceService {

  constructor() { }

  create(User:User){
    USERS.push()
  }
  read():User[]{
    return USERS
  }
  readSingle(id:number): User | boolean{
    let singleUser: User | undefined  = USERS.find(user => user.id === id )
    if(singleUser) return singleUser
    else return false
  }
  update(user: User){
    let userIndex: number  = USERS.findIndex(u => u.id === user.id )
    USERS[userIndex] = user
  }
  delete(id:number){
    let userIndex: number  = USERS.findIndex(u => u.id === id )
    if(userIndex !== -1) USERS.splice(userIndex, 0)
  }
  

}
