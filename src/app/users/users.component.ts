import { Component, OnInit } from '@angular/core';
import User from '../types/User';
import { UsersService } from '../users.service';
import {MatTableModule, MatTable} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatTable, MatButtonModule, MatIconModule, MatDividerModule, MatTooltipModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'email', 'password', 'delete'];
  dataSource = this.users;

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
      this.dataSource = data;
    });
    
  }
  public deleteUser(id: number) {
    // console.log(id);
    this.usersService.deleteUser(id).subscribe((data) => {
      this.openSnackBar("User was deleted");
      this.usersService.getUsers().subscribe((data) => {
        this.users = data;
        this.dataSource = data;
      })
    }, (err) =>{
      console.log('Error'); 
      this.openSnackBar("Can not delete user")
    });
  }
  
  constructor(private _snackBar: MatSnackBar, private usersService: UsersService, public dialog: MatDialog){}


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id:number): void {
    // this.dialog.open(DeleteUserDialogComponent, {
    //   width: '250px',
    //   enterAnimationDuration,
    //   exitAnimationDuration,
    // }).afterClosed().subscribe(result => console.log(result));

    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result ==true){
        this.deleteUser(id);
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
      data: message,
      horizontalPosition:'right', 
      verticalPosition:'top'
    });
}

}