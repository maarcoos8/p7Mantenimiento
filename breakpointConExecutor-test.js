import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  scenarios: {
    breakpoint: {
      executor: 'ramping-arrival-rate',
      maxVUs: 1e7,
      preAllocatedVUs: 1000,
      stages: [
        { target: 100000, duration: '10m' },
      ],
    },
  },
  thresholds: {
        http_req_failed: [{
        abortOnFail: true,
        threshold: 'rate<=0.01',
    }]}
};

export default function () {
  const url = http.get('http://localhost:8080/medico/1');
  check(url, {
        'status is 200': (r) => r.status === 200,
  })
  sleep(1);
}
