import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieClass } from 'src/app/classes/movie-class';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  public data: MovieClass[] = [];
  public dataMovie: MovieClass[] = [];
  public dataThriller: MovieClass[] = [];
  public dataAdventure: MovieClass[] = [];
  public dataAction: MovieClass[] = [];
  public dataAnimation: MovieClass[] = [];
  public dataSciFi: MovieClass[] = [];
  public slides: any = [];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private service: MovieServiceService
  ) { }

  ngOnInit() {

    this.getData();

  }

  public getData() {

    this.subscriptions.add(
      this.service.getTrendingWeek().subscribe(
        data => {
          this.dataMovie = data.results;

          data.results.forEach((element: any) => {
            let obj = {
              "backdrop_path": element.backdrop_path,
              "media_type": element.media_type,
              "title": element.title,
              "overview": element.overview
            }
            this.slides.push(obj)
          });

          this.subscriptions.add(
            this.service.getGenreThriller().subscribe(
              data => {
                this.dataThriller = data.results;

                this.subscriptions.add(
                  this.service.getGenreAction().subscribe(
                    data => {
                      this.dataAction = data.results;

                      this.subscriptions.add(
                        this.service.getGenreAnimation().subscribe(
                          data => {
                            this.dataAnimation = data.results;

                            this.subscriptions.add(
                              this.service.getGenreAdventure().subscribe(
                                data => {
                                  this.dataAdventure = data.results;

                                  this.subscriptions.add(
                                    this.service.getGenreSciFi().subscribe(
                                      data => {
                                        this.dataSciFi = data.results;

                                      }
                                    )
                                  )

                                }
                              )
                            )

                          }
                        )
                      )


                    }
                  )
                )
              }
            )
          )


        }
      )
    )
  }

}
