import http from 'k6/http';

export let options = {
  stages: [
    { duration: '3m', target: 25000 },
    { duration: '3m', target: 25000 },
    { duration: '3m', target: 0 },
  ],
};

export default function () {
  http.get('http://localhost:8080/medico/1');
}
