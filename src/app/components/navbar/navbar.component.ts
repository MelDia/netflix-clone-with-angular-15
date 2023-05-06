import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MovieClass } from 'src/app/classes/movie-class';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() public dataMovie: MovieClass[] = [];

  public dataSearch: MovieClass[] = [];
  public show: boolean = true;

  public searchForm: FormGroup;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private service: MovieServiceService
  ) {

    this.searchForm = new FormGroup({
      searchInput: new FormControl('')
    })
  }

  ngOnInit() {
    console.log('data ->', this.dataMovie)
  }

  public onSubmit() {

    let search = this.searchForm.value.searchInput
    this.subscriptions.add(
      this.service.getSearch(search).subscribe(
        response => {
          this.dataSearch = response.results;

        }
      )
    )

  }


}
