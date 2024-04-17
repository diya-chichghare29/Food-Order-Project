import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItems: string = "";
  searchCity:string="";

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['searchItems'])
        this.searchItems = params['searchItems'];
    });
  }

  search(): void {
    if (this.searchItems)
      this.router.navigateByUrl('/search/' + this.searchItems)
  }
}
