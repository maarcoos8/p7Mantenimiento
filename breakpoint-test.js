import http from 'k6/http';

export let options = {
  scenarios: {
    stress_breakpoint: {
      executor: 'ramping-arrival-rate',
      preAllocatedVUs: 1000,
      maxVUs: 100000,
      stages: [
        { target: 100000, duration: '10m' },
      ],
    },
  },
  thresholds: {
        http_req_failed: [{
        threshold: 'rate<=0.1',
        abortOnFail: true,
    }]}
};

export default function () {
  http.get('http://localhost:8080/medico/1');
}
