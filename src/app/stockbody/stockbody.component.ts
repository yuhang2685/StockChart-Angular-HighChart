import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import * as Highcharts from 'highcharts';
import { ChartDataService } from '../services/chart-data.service';

@Component({
  selector: 'app-stockbody',
  templateUrl: './stockbody.component.html',
  styleUrls: ['./stockbody.component.css']
})

export class StockbodyComponent implements OnInit, AfterViewInit, OnDestroy
{
	@ViewChild('charts', {static: false}) public chartEl: ElementRef;

	constructor(private hcs: ChartDataService) {}

	ngOnInit() {}

	ngAfterViewInit()
	{
		this.createChart();
	}

	ngOnDestroy() {}

	createChart()
	{
		this.hcs.loadData("SPXL", (symbol, data)=> {
			this.hcs.createChart(this.chartEl.nativeElement, symbol, data);
		});
	}
}