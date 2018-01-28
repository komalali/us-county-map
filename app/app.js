import { select } from 'd3';

const app = (name) => {
  select('body')
    .append('h1')
    .text(`Hello from ${name}!`);
};

app('Komal');
