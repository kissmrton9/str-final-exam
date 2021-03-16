import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  subscribeForDeleteItem: User = new User();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  subscribeForDelete(subscribeForDeleteItem: User): void {
    this.subscribeForDeleteItem = subscribeForDeleteItem;
  }

  delete(): void {
    this.userService.delete(this.subscribeForDeleteItem.id);
    //this.toastr.success('Succesfully deleted!', 'Editor message:');
  }

  updateItem(user:User): void{
    this.userService.update(user);
  }

  deleteItem(id:number): void{
    this.userService.delete(id);
  }

  createItem(user:User): void{
    this.userService.create(user);
  }
}
