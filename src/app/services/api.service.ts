import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://3.108.79.136:3000';

// const API_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public notificationId = '';
  public announcementId = '';
  public crownId = '';
  public giftId = '';
  constructor(private http: HttpClient) { }

  getGiftsData(request?: any): Observable<any> {
    return this.http.get(API_URL + '/gifts');
  }
  getGiftById(id: string): Observable<any> {
    return this.http.get(API_URL + '/gifts/' + id);
  }

  deleteGift(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('userToken')
      })
    };
    return this.http.put(API_URL + '/gifts/update/' + id, {}, httpOptions);
  }

  updateGift(request: any, id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('userToken')
      })
    };
    return this.http.put(API_URL + '/gifts/update/' + id, request, httpOptions);
  }

  getCrownsList(request?: any): Observable<any> {
    return this.http.get(API_URL + '/crowns');
  }

  getCrownByID(id: string): Observable<any> {
    return this.http.get(API_URL + '/crowns/' + id);
  }

  saveCrown(request: any): Observable<any> {
    return this.http.post(API_URL + '/crowns/add', request);
  }

  updateCrown(request: any, id: string): Observable<any> {
    return this.http.put(API_URL + '/crowns/update/' + id, request);
  }

  deleteCrown(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('userToken')
      })
    };
    return this.http.put(API_URL + '/api/v1/admin/secure/delete/crown-value/' + id, {}, httpOptions);
  }

  getBonusDetails(): Observable<any> {
    return this.http.get(API_URL + '/bonus');
  }

  updateBonus(request: any, id: string): Observable<any> {
    return this.http.put(API_URL + '/bonus/update/' + id, request);
  }

  saveGift(request: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('userToken')
      })
    };
    return this.http.post(API_URL + '/api/v1/gift/add-gift', request, httpOptions);
  }



  getCrownToPearls(): Observable<any> {
    return this.http.get(API_URL + '/crown_to_pearl');
  }
  getCrownToPearlsbyId(id: string): Observable<any> {
    return this.http.get(API_URL + '/crown_to_pearl/' + id);
  }

  updateCrownToPearls(request: any, id: string): Observable<any> {
    return this.http.put(API_URL + '/crown_to_pearl/update/' + id, request);
  }

  saveCrownToPearls(request: any): Observable<any> {
    return this.http.post(API_URL + '/crown_to_pearl/add', request);
  }

  getEarningSetup(): Observable<any> {
    return this.http.get(API_URL + '/earning_setup');
  }
  getEarningSetupId(id: string): Observable<any> {
    return this.http.get(API_URL + '/earning_setup/' + id);
  }

  updateEarningSetup(request: any, id: string): Observable<any> {
    return this.http.put(API_URL + '/earning_setup/update/' + id, request);
  }

  saveEarningSetup(request: any): Observable<any> {
    return this.http.post(API_URL + '/earning_setup/add', request);
  }
  getNotification(): Observable<any> {
    return this.http.get(API_URL + '/notification');
  }
  getNotificationById(id: string): Observable<any> {
    return this.http.get(API_URL + '/notification/' + id);
  }

  updateNotification(request: any, id: string): Observable<any> {
    return this.http.put(API_URL + '/notification/update/' + id, request);
  }

  saveNotification(request: any): Observable<any> {
    return this.http.post(API_URL + '/notification/add', request);
  }
  getAnnouncement(): Observable<any> {
    return this.http.get(API_URL + '/announcement');
  }
  getAnnouncementById(id: string): Observable<any> {
    return this.http.get(API_URL + '/announcement/' + id);
  }

  updateAnnouncement(request: any, id: string): Observable<any> {
    return this.http.put(API_URL + '/announcement/update/' + id, request);
  }

  saveAnnouncement(request: any): Observable<any> {
    return this.http.post(API_URL + '/announcement/add', request);
  }


  addUser(obj) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('userToken')
      })
    };
    return this.http.post(API_URL + '/api/v1/admin/secure/add-user', obj, httpOptions);

    // return this.http.post(API_URL + '/admin/ratu_user/validate', obj);
  }
  fetchUsers() {
    return this.http.get(API_URL + '/user');
  }

  setCrown(obj) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('userToken')
      })
    };
    return this.http.post(API_URL + '/api/v1/admin/secure/set/crown-value', obj, httpOptions);
  }


  editCrown(obj) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('userToken')
      })
    };
    return this.http.put(API_URL + '/api/v1/admin/secure/crown-value', obj, httpOptions);
  }

  adminLogin(reqData: any) {
    return this.http.post(API_URL + '/api/v1/admin/login', reqData);
  }

  addPearlToRm(reqData: any) {
    return this.http.post(API_URL + '/crown_to_pearl/add', reqData);
  }

  addPearlToRmConvert(reqData: any) {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.post(API_URL + '/pearl_to_money/validate', reqData);
  }

  editPeraltoRmConvert(reqData: any, id) {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.post(API_URL + '/pearl_to_money/update/' + id, reqData);
  }

  fetchStreamByType(type: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('userToken')
      })
    };
    return this.http.get(API_URL + '/api/v1/admin/secure/live-streams/' + type, httpOptions);
  }

  getKpi_TopStreamers() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('userToken')
      })
    };
    return this.http.get(API_URL + '/api/v1/admin/secure/dashboard', httpOptions);
  }


  getdashboardData(val: any) {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.get(API_URL + '/api/v1/dashboard/total-revenuecount/' + val);
  }

  getStreamerreport() {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.get(API_URL + '/pearl_to_money/update/');
  }

  getViewerReports() {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.get(API_URL + '/pearl_to_money/update/');
  }


  getTurnoverReport() {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.get(API_URL + '/api/v1/agent/agent-turnover/BQkBFzre77ZHk4OjzucJz6rYQ552');

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'x-access-token': sessionStorage.getItem('userToken')
    //   })
    // };
    // return this.http.get(API_URL + '/api/v1/admin/secure/dashboard', httpOptions);
  }

  getStreamerInfo() {
    return this.http.get(API_URL + '/api/v1/dashboard/streamer-infolist/' + sessionStorage.getItem('userToken'));
  }

  getStreamerLocation() {
    return this.http.get(API_URL + '/api/v1/dashboard/streamer-location/' + sessionStorage.getItem('userToken'));
  }

  getViewerLocation() {
    return this.http.get(API_URL + '/api/v1/dashboard/viewer-location/' + sessionStorage.getItem('userToken'));
  }

  approveAgent(obj) {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.post(API_URL + '/api/v1/user/secure/stream-AgentApprove', obj);
  }


  rejectAgent(obj) {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.post(API_URL + '/api/v1/user/secure/stream-AgentApprove', obj);
  }

  acceptRejectStreamer(obj) {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.post(API_URL + '/api/v1/agent/accept-streamer', obj);
  }

  agentWithDrawSubmit(obj) {
    let headers = new HttpHeaders();
    headers = headers.set('x-access-token', sessionStorage.getItem('userToken'));
    return this.http.post(API_URL + '/api/v1/withdrawble/withdraw-submit', obj);
  }

}

