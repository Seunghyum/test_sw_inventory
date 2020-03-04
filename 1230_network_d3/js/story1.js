$(document).ready(function () {
  var width = window.innerWidth,
    height = window.innerHeight;

  var force = d3.layout.force()
    .size([width, height])
    .charge(-400)
    .linkDistance(40)
    .on("tick", tick);

  var drag = force.drag()
    .on("dragstart", dragstart);

  var svg = d3.select("svg")

  var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

  d3.json("../data/fb_data.json", function (error, graph) {
    if (error) throw error;
    console.log('graph : ', graph)

    force
      .nodes(() => {
        console.log('graph.nodes : ', graph.nodes)
        return graph.nodes
      })
      .links(graph.links)
      .start();

    link = link.data(graph.links)
      .enter().append("line")
      .attr("class", "link");

    node = node.data(graph.nodes)
      .enter().append("circle")
      .attr("class", "node")
      .attr("r", 12)
      .on("dblclick", dblclick)
      .call(drag);
  });

  function tick() {
    console.log('link : ', link)
    link.attr("x1", function (d) {
        console.log("d : ", d)
        return d.source.x;
      })
      .attr("y1", function (d) {
        return d.source.y;
      })
      .attr("x2", function (d) {
        return d.target.x;
      })
      .attr("y2", function (d) {
        return d.target.y;
      });

    node.attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      });
  }

  function dblclick(d) {
    d3.select(this).classed("fixed", d.fixed = false);
  }

  function dragstart(d) {
    d3.select(this).classed("fixed", d.fixed = true);
  }
})