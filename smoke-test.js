import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5,
  duration: '1m',
  thresholds: {
        http_req_duration: [{ threshold: 'avg<100', abortOnFail: true }],
        http_req_failed: [{ threshold: 'rate==0', abortOnFail: true }],
    },
};

export default function () {
  const res = http.get('http://localhost:8080/medico/1');
  sleep(1);
}
