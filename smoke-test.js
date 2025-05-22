import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 5,
  duration: '1s',
};

export default function () {
  const res = http.get('http://localhost:8080/medico/1');
  check(res, {
    'status es 200': (r) => r.status === 200,
    'duración < 100ms': (r) => r.timings.duration < 100,
  });
}
