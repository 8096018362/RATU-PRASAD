import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  videoObj: any = {};

  constructor() { }

  ngOnInit(): void {


    this.videoObj = {
      "id": "1",
      "username": "User",
      "title": "yiorgue dykr",
      "video_title": "public",
      "payment": "Free",
      "is_streaming": "Broadcast Ended",
      "streamed_At": "8 months ago",
      "viewers_count": "0",
      "picture": "https://admin-streamnow.appswamy.com/uploads/users/9f498bfd61ab0a61d3164b960175dec431e94a99.jpg",
      "Browser_name": "android",
      "description": "tidkd",
      "starttime": "30 Mar 2020 08:10 PM",
      "endtime":"30 Mar 2020 08:10 PM",
      "no_of_min": "1",
      "video_amount": "$0.00",
      "total_amount": "$0.00",
      "user_commission": "$0.00",
      "admin_commission": "$0.00",
      "created_at": "30 Mar 2020 08:10 PM",
      "updated_at": "30 Mar 2020 08:12 PM"
    }

  }

}
