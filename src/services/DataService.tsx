import { RequestInterface } from "../interfaces/RequestInterface";

export class DataService {
  request!: RequestInterface;

  set requestData(request: RequestInterface) {
    this.request = request;
    localStorage.setItem("request", JSON.stringify(this.request));
  }

  get requestData() {
    this.request = JSON.parse(localStorage.getItem("request") || "{}");
    return this.request;
  }
}
