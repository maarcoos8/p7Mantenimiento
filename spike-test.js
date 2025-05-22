import http from 'k6/http';

export let options = {
  stages: [
    { duration: '2m', target: 20000 },
    { duration: '2m', target: 0 },
  ],
};

export default function () {
  http.get('http://localhost:8080/medico/1');
}
