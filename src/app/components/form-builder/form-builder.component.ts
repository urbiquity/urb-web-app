import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  @Output() onFormSubmit: EventEmitter<any> = new EventEmitter<any>();

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


  onSubmit(myForm: NgForm) {
    this.onFormSubmit.emit('submit');
  }

  onYearChanged(data: Date, type: string) : void {

    if(data !== null){

      if(type === 'from') {
        this.yearMin = data;

        this.setDateRange(this.yearMin, this.yearMin);

      } else {
        this.yearMax = data;

        this.setDateRange(this.yearMin, this.yearMax);
      }

    }

  }

  setDateRange(min: Date, max: Date) {
    this.fromMin = new Date('01-01-' + min.getFullYear  ());
    this.fromMax = new Date('12-31-' + max.getFullYear());

    this.toMin = this.fromMin;
    this.toMax = this.fromMax;

    this.isDisabled = false;
  }

  onDateChanged(data: Date, type: string) : void {
    
    if( type === 'from') {
      this.toMin = data;
    } else {
      this.toMax = data;
    }
  }

}
