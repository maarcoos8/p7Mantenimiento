import http from 'k6/http';

export let options = {
  stages: [
    { duration: '3m', target: 40000 }, // subida
    { duration: '3m', target: 40000 }, // mantenimiento
    { duration: '3m', target: 0 },     // bajada
  ],
};

export default function () {
  http.get('http://localhost:8080/medico/1');
}
