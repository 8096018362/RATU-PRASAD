import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.html',
    styleUrls: ['./admin-home.scss']
})
export class AdminHomeComponent implements OnInit {
    public chartDB: any;

    @ViewChild('areaBasicChart', { static: false }) areaBasicChart: ElementRef;
    public areaBasicChartData: any;
    public areaBasicChartTag: CanvasRenderingContext2D;
    public areaBasicChartOption: any;
    revenueFlag: any = 'today';
    revenueData: any = [];
    streamerInfoList = [];
    streamerLocationList = [];
    viewerLocationList = [];
    constructor(public apiService: ApiService) {
        this.chartDB = {
            chart: {
                type: 'donut',
            },
            series: [44, 55, 41],
            colors: ['#ffba57', '#9ccc65', '#ff5252'],
            legend: {
                show: false,
                position: 'bottom',
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: false,
                            name: {
                                show: true
                            },
                            value: {
                                show: true
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: false,
                dropShadow: {
                    enabled: false,
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };
    }

    getStreamerInfo() {
        this.getStreamerLocation()
        this.getTopStreamers()
        this.apiService.getStreamerInfo().subscribe(res => {
            if (res['success']) {
                this.streamerInfoList = res['data']
            }
        })

    }

    getStreamerLocation() {
        this.getViewerLocation()
        this.apiService.getStreamerLocation().subscribe(res => {
            if (res['success']) {
                this.streamerLocationList = res['data']
            }
        })
    }


    getViewerLocation() {
        this.apiService.getViewerLocation().subscribe(res => {
            if (res['success']) {
                this.viewerLocationList = res['data']
            }
        })
    }

    getTopStreamers() {
        this.apiService.getKpi_TopStreamers().subscribe(res => {
           // console.log("res", res)
        })
    }

    getRevenue(ev) {
        this.getStreamerInfo()
        this.apiService.getdashboardData(this.revenueFlag).subscribe(res => {
            if (res['success']) {
                this.revenueData = res['data'][0]
            }
        })
    }

    ngOnInit() {


        setTimeout(() => {
            this.areaBasicChartOption = {
                barValueSpacing: 20
            };

            /* area basic chart */
            const areaBasicTag = (((this.areaBasicChart.nativeElement as HTMLCanvasElement).children));
            this.areaBasicChartTag = ((areaBasicTag['area_basic_chart']).lastChild).getContext('2d');
            const bcd = (this.areaBasicChartTag).createLinearGradient(0, 0, 500, 0);
            bcd.addColorStop(0, '#4680ff');
            bcd.addColorStop(1, '#4680ff');
            const efg = (this.areaBasicChartTag).createLinearGradient(0, 0, 500, 0);
            efg.addColorStop(0, '#0e9e4a');
            efg.addColorStop(1, '#0e9e4a');
            this.areaBasicChartData = {
                labels: ['Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14', 'Nov 15', 'Nov 16', 'Nov 17', 'Nov 18', 'Nov 19', 'Nov 20'],
                datasets: [{
                    label: 'Last 10 days page views',
                    data: [3, 6, 8, 9, 8, 6, 4, 5, 5, 6, 5],
                    fill: true,
                    borderWidth: 4,
                    borderColor: bcd,
                    backgroundColor: bcd,
                    hoverborderColor: bcd,
                    hoverBackgroundColor: bcd,
                }
                ]
            };
        }, 100);
        this.getRevenue('')

    }

} 