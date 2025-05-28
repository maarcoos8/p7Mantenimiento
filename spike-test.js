import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
  stages: [
    { duration: '1m', target: 185 }, // 40% de VUs : 463*0.4
    { duration: '1m', target: 0 },
  ],
  thresholds: {
    http_req_failed: [{ threshold: 'rate<=0.005' }],
  },
};

export default function () {
  http.get('http://localhost:8080/medico/1');
  sleep(1);
}
