import http from "k6/http";
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '3m', target: 231 }, // 50% de VUs : 463*0.5
        { duration: '3m', target: 231 },
        { duration: '2m', target: 0 },
    ],
    thresholds: {
        http_req_failed: [{ threshold: 'rate<0.01', abortOnFail: true }],
    }
};

export default function () {
  http.get('http://localhost:8080/medico/1');
  sleep(1);
}
