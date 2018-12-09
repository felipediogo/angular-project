import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DragonService } from '../services/dragon.service';
import { DeleteConfirmationModalComponent } from './components/delete.confirmation.modal.component';
import { MatDialog } from '@angular/material';

@Injectable()
@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.list.component.html',
  styleUrls: ['./dragons.list.component.scss'],
  providers: [DragonService]

})
export class DragonsListComponent implements OnInit {
  dragons: any = [];
  displayedColumns: any = [];
  constructor(
    private router: Router,
    public dragonService: DragonService,
    public dialog: MatDialog) {
    this.displayedColumns = ['created_at', 'name', 'type', '_id'];
  }

  ngOnInit() {
    this.dragonService.getDragonsCount()
      .subscribe((totalCount: number) => {
        this.dragonService.getDragons(totalCount)
          .subscribe((data: { items: [] }) => {
            this.dragons = data.items.sort(this.sortDragons);
          });
      });
  }

  editDragon(id: string) {
    this.router.navigate(['dragons/', id]);    // here I'll have to route to someplace
  }

  addDragon() {
    this.router.navigate(['dragons/']);    // here I'll have to route to someplace
    
  }

  openDeleteModal(_id: string, name: string) {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
      width: '250px',
      data: { name, _id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.delete) {
        this.dragonService.deleteDragon(_id)
          .subscribe((response: { ok: number }) => {
            if (response.ok == 1)
              this.ngOnInit();
          });
      }
    });
  }

  deleteDragon(_id: string) {
    this.dragonService.deleteDragon(_id);
  }

  sortDragons(dragonA: { name: string }, dragonB: { name: string }) {
    if (dragonA.name.toLowerCase() > dragonB.name.toLowerCase()) {
      return 1;
    }
    if (dragonA.name.toLowerCase() < dragonB.name.toLowerCase()) {
      return -1;
    }
    return 0;
  }

}
