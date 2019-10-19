import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  minModeYear: BsDatepickerViewMode = 'year';

  bsConfigYear: Partial<BsDatepickerConfig>;
  bsConfigTo: Partial<BsDatepickerConfig>;
  bsConfigFrom: Partial<BsDatepickerConfig>;

  isDisabled = true;

  colorTheme = 'theme-dark-blue';

  yearMin: Date;
  yearMax: Date;

  toMin: Date;
  toMax: Date;

  fromMin: Date;
  fromMax: Date;

  constructor() { }

  ngOnInit() {
    this.bsConfigYear = Object.assign({}, {
      minMode : this.minModeYear,
      dateInputFormat: 'YYYY',
      containerClass : this.colorTheme
    });

    this.bsConfigFrom = Object.assign({}, {
      dateInputFormat: 'MM-DD-YYYY',
      showWeekNumbers: false,
      containerClass : this.colorTheme
    });

    this.bsConfigTo = Object.assign({}, {
      dateInputFormat: 'MM-DD-YYYY',
      showWeekNumbers: false,
      containerClass : this.colorTheme
    });
  }

  onYearChanged(data: Date, type: string) : void {

    if(type === 'from') {
      this.yearMin = data;

      this.setDateRange(this.yearMin, this.yearMin);

    } else {
      this.yearMax = data;

      this.setDateRange(this.yearMin, this.yearMax);
    }

  }

  setDateRange(min: Date, max: Date) {
    this.fromMin = new Date('01-01-' + min.getFullYear());
    this.fromMax = new Date('12-31-' + max.getFullYear());

    this.toMin = this.fromMin;
    this.toMax = this.fromMax;

    this.isDisabled = false;
  }

  onFromChanged(data: Date) : void {

  }

  onToChanged(data: Date) : void {

  }

}
