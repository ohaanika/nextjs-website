import Layout from '../components/layout/layout'
import Meta from '../components/meta'
import Landing from '../sections/landing'
import ClientLogos from '../sections/clientLogos'
import Services from '../sections/services'
import About from '../sections/about'
import Team from '../sections/team'
import Portfolio from '../sections/portfolio'
import ClientTestimonials from '../sections/clientTestimonials'
import Contact from '../sections/contact'

import Script from 'next/script'

import { getAllPostData } from '../utils/mdx'

export const getStaticProps = async () => {
  const portfolioPosts = getAllPostData('portfolio')
  return {
    props: {
      portfolioPosts,
    },
  }
}

const Index = ({ portfolioPosts }) => (
  <Layout>
    <Meta />
    <Landing />
    <ClientLogos />
    <About />
    <Team />
    <Services />
    <Portfolio posts={portfolioPosts} />
    <ClientTestimonials />
    <Contact />
    <Script id="show-banner" strategy="lazyOnload">
      {`
const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 600;
const FPS = 60;

const STROKE_COLOR = "#C4482533";
const CANVAS_COLOR = "#D2E6E5";
const NODE_COLOR = "#DE853C";

const NODES = [];
const NODE_COUNT = 27;
const NODAL_INV_DENSITY = 0;
const NETWORK_RADIUS = CANVAS_HEIGHT / 2;
const MIN_RADIUS = 1;
const MAX_RADIUS = 2;

function clear(canvas)
{
  ctx.fillStyle = CANVAS_COLOR;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function is_inside_box(x, y, box_x0, box_x1, box_y0, box_y1)
{
  if(x >= box_x0 && x <= box_x1 && y >= box_y0 && y <= box_y1)
    return true;
  return false;
}

function generate_nodes()
{
  for(let i=0; i<NODE_COUNT; i+=1)
  {
    let r = NETWORK_RADIUS;
    let theta = Math.random() * 2 * Math.PI;
    let dist_to_circle = Math.log(Math.random() * Math.E);

    let x = CANVAS_WIDTH/2 + (r * Math.cos(theta));
    let y = CANVAS_HEIGHT/2 + (r * Math.sin(theta));

    let radius = Math.floor(
      MIN_RADIUS + (MAX_RADIUS - MIN_RADIUS) * Math.abs(dist_to_circle)
    );

    // deltaX and deltaY determine how the nodes animate in time
    let node = {
      x: x,
      y: y,
      color: NODE_COLOR,
      radius: radius,
      deltaX: 0,
      deltaY: 0,
    }
    NODES.push(node);
  }
}

function draw_node_to_canvas(ctx, x, y, color, radius)
{
  ctx.beginPath();
  ctx.arc(
    x,
    y,
    radius,
    0,
    2 * Math.PI,
    false,
  );
  ctx.fillStyle = NODE_COLOR;
  ctx.fill();
}

function draw_all_nodes(nodes)
{
  for(n of nodes)
  {
    draw_node_to_canvas(
      ctx,
      n["x"] + n["deltaX"],
      n["y"] + n["deltaY"],
      n["color"],
      n["radius"],
    );
  }
}

function draw_network_lines()
{
  for(let i=0; i<NODES.length; i+=1)
  for(let j=i; j<NODES.length; j+=1)
  {
    if(Math.random() > NODAL_INV_DENSITY)
    {
      let node_i = NODES[i];
      let node_j = NODES[j];

      ctx.strokeStyle = STROKE_COLOR;
      ctx.beginPath();
      ctx.moveTo(
        node_i["x"] + node_i["deltaX"],
        node_i["y"] + node_i["deltaY"]
      );
      ctx.lineTo(
        node_j["x"] + node_j["deltaX"],
        node_j["y"] + node_j["deltaY"]
      );
      ctx.stroke();
    }
  }
}

function perturb_nodes(nodes, counter)
{
  for(n of nodes)
  {
    // n["deltaX"] = 4*Math.cos( 0.04 * counter + (2*Math.random()-1) ) + 1*Math.tan(0.00004*counter + (2*Math.random()-1) );
    // n["deltaY"] = 2*Math.sin(1 + Math.PI/90 * counter + (2*Math.random()-1) );

    n["deltaX"] = 8 * Math.sin(0.01 * counter);
    n["deltaY"] = 7 * Math.cos(0.028 * counter);
    
    // n["deltaY"] = 2*Math.sin(1 + Math.PI/90 * counter + (2*Math.random()-1) );
  }
}


// setup
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

generate_nodes();

// loop
let counter = 0
window.setInterval(e => {
  clear(canvas);
  draw_all_nodes(NODES);
  perturb_nodes(NODES, counter);
  draw_network_lines();
  counter += 1;
}, 1000 / FPS);
`}
    </Script>
  </Layout>
)

export default Index
