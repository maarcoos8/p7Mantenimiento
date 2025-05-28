// Grupo formado por Francisco Ramírez Cañadas y Jorge Repullo Serrano.

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '0s', target: 50000 },
        { duration: '10m', target: 100000 }
    ],
    thresholds: {
        http_req_failed: [{
        abortOnFail: true,
        threshold: 'rate<=0.01',
    }]}
};

export default () => {
    const urlRes = http.get('http://localhost:8080/medico/1');
    check(urlRes, {
        'status is 200': (r) => r.status === 200,
    })
    sleep(1);
};