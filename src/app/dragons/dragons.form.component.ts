import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DragonService } from '../services/dragon.service';

@Injectable()
@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.form.component.html',
  styleUrls: ['./dragons.form.component.scss'],
  providers: [DragonService]
})

export class DragonsFormComponent implements OnInit {
  dragon: any = {
    name: '',
    type: '',
    histories: ''
  };
  constructor(
    private router: Router,
    public dragonService: DragonService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dragonService.getDragon(id)
      .subscribe(data => {
        const histories = data.histories.join('\n');
        this.dragon = data;
        this.dragon.histories = histories;
      });
    }
  }

  save(): void {
    console.log(this.dragon);
    this.dragonService.saveDragon(this.dragon)
      .subscribe((response: {ok: number, slug: string}) => {
        if (response.ok == 1 || response.slug) {
          this.router.navigate(['/']);
        }
      });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  disableSubmit(): boolean {
    return this.dragon.name.trim() == '' || this.dragon.type.trim() == '';
  }
}