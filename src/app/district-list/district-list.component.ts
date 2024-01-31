import { Component, OnInit } from '@angular/core';
import { DistrictService } from '../district.service';
@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {
  districts: any[] = [];
  constructor(private districtService: DistrictService) {}

  ngOnInit() {
     this.getDistricts();
  }
  getDistricts(): void {
    this.districtService.getDistricts().subscribe((districts) => {
      this.districts = districts;
    });
  }
}
