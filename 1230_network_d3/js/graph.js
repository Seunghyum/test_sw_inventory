$(document).ready(function () {
  d3.queue()
    .defer(d3.csv, "./data/edge_1230.csv")
    .defer(d3.csv, "./data/node_1230.csv")
    .await(function (error, baseLinks, baseNodes) {
      if (error) {
        console.error('Oh dear, something went wrong: ' + error);
      } else {

        var nodes = [...baseNodes]
        var links = [...baseLinks]

        function getNeighbors(node) {
          return baseLinks.reduce(function (neighbors, link) {
              if (link.target.id === node.id) {
                neighbors.push(link.source.id)
              } else if (link.source.id === node.id) {
                neighbors.push(link.target.id)
              }
              return neighbors
            },
            [node.id]
          )
        }

        function isNeighborLink(node, link) {
          return link.target.id === node.id || link.source.id === node.id
        }

        function getNodeColor(node, neighbors) {
          if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
            return node.level === 1 ? 'blue' : 'green'
          }
          return node.level === 1 ? 'red' : 'gray'
        }

        function getLinkColor(node, link) {
          return isNeighborLink(node, link) ? 'green' : '#E5E5E5'
        }

        function getTextColor(node, neighbors) {
          return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? 'green' : 'black'
        }
        var valueline = d3.line()
          .x(function (d) {
            return d[0];
          })
          .y(function (d) {
            return d[1];
          })
          .curve(d3.curveCardinalClosed),
          paths,
          groups,
          groupIds,
          scaleFactor = 0.7,
          polygon,
          centroid,
          node,
          link,
          //      color = d3.scaleOrdinal(d3.schemeCategory20),
          curveTypes = ['curveCardinalClosed'];

        var options = curveTypes
        //	filtered types
        //  typeFilterList = [];
        id = [];

        var width = window.innerWidth
        var height = window.innerHeight
        var color = d3.scaleOrdinal(d3.schemeCategory20);

        /*     var color = d3.scaleOrdinal()
        //this assumes you have 3 groups of data//﻿each of the domains corresponds to a color set
          .domain(["data1", "data2", "data3","data4", "data5","data6", "data7", "data8","data9", "data10",
          "data11", "data12", "data13","data14", "data15","data16", "data17", "data18","data19", "data20",
          "data21", "data22", "data23","data24", "data25","data26", "data27", "data28","data29", "data30",
          "data31", "data32", "data33","data34", "data35","data36", "data37", "data38","data39", "data40"])
          .range(['#703ca7', '#8339ad', '#9738b0', '#ac36af', '#c036ac', '#d339a4', '#e53d9a', '#f3428f', '#ff4981', '#ff5372',
          '#ff5d63', '#ff6a55', '#ff7849', '#ff8840', '#fb973b', '#efa83b', '#e2b93e', '#d4c943', '#c5d84c', '#b9e658',
          '#adf268', '#95f565', '#7cf867', '#62f96c', '#4cf873', '#37f57d', '#24f18a', '#16ea98', '#0ce0a7', '#0cd5b5',
          '#12c7c3', '#1abace', '#23aad7', '#2e9bdd', '#398ade', '#447add', '#4f6bd8', '#595dd0', '#6250c5', '#6a45b7']);

    var color = d3.scaleOrdinal()
    //this assumes you have 3 groups of data//﻿each of the domains corresponds to a color set
        .domain(["data1", "data2", "data3"])
        .range([ "#6002ee","#ee0290", "#90ee02"]);*/

        var shape = d3.scaleOrdinal(d3.symbols);
        // Initial transform to apply
        var defaultZoom = 0.9
        // var transform = d3.zoomIdentity.translate(480, 250).scale(0.3);
        var transform = d3.zoomIdentity.translate(480, 250).scale(defaultZoom);
        var zoom = d3.zoom().on("zoom", handleZoom);

        var svg = d3.select('svg')
          .call(zoom) // Adds zoom functionality
          .call(zoom.transform, transform); // Calls/inits handleZoom

        svg.attr('width', width).attr('height', height)

        var linkElements,
          nodeElements,
          textElements

        // we use svg groups to logically group the elements together
        var linkGroup = svg.append('g').attr('class', 'links zoomable').attr("transform", transform);
        var nodeGroup = svg.append('g').attr('class', 'nodes zoomable').attr("transform", transform);
        var textGroup = svg.append('g').attr('class', 'texts zoomable').attr("transform", transform);

        // we use this reference to select/deselect
        // after clicking the same element twice
        var selectedId

        // simulation setup with all forces
        var linkForce = d3
          .forceLink()
          .id(function (link) {
            return link.id
          })
          //       .strength(function (link) { return link.strength})
          .distance(100)
        // console.log('d3.forceCenter(width / 2, height / 2) : ', d3.forceCenter(width / 2, height / 2))
        var simulation = d3
          .forceSimulation()
          .force('link', linkForce)
          .force('charge', d3.forceManyBody().strength(-200).distanceMax(5000))
          .force('center', d3.forceCenter(width / 2, height / 2))
          .alphaTarget(0)
          .alphaDecay(0.15) // speed the visualization stops! now it is 7 sec
          .velocityDecay(0.2);
        //    .force('forceCollide',d3.forceCollide()
        //        .radius(function (d){
        //          return 40
        //        }))
        //    .stop();

        var dragDrop = d3.drag().on('start', function (node) {
          node.fx = node.x
          node.fy = node.y
        }).on('drag', function (node) {
          simulation.alphaTarget(0.3).restart()
          node.fx = d3.event.x
          node.fy = d3.event.y
        }).on('end', function (node) {
          if (!d3.event.active) {
            simulation.alphaTarget(0)
          }
          node.fx = null
          node.fy = null
        })

        // filtering list is used to filter the entire visulaization based on
        // the group of nodes used for individual projects.
        // will need to also calculate the neighbors once the projects are selected..
        //	filtered types
        typeFilterList = [];
        /*
              //	filter button event handlers
              $(".filter-btn").on("click", function() {
                var id = $(this).attr("value");
                if (typeFilterList.includes(id)) {
                  typeFilterList.splice(typeFilterList.indexOf(id), 1)
                } else {
                  typeFilterList.push(id);
                }
                filter();
                update();
              });

              var nodeByID = {};

              baseNodes.forEach(function(n) {
                nodeByID[n.id] = n;
              });

              baseLinks.forEach(function(l) {
                l.sourceGroup = nodeByID[l.source].proj.toString();
                l.targetGroup = nodeByID[l.target].proj.toString();
              });
            //  var g = [...baseNodes, ...baseLinks ];
              var g = zip(baseNodes,baseLinks);
              graph = g;
              store = $.extend(true, {}, g);
        //console.log(g);
        //console.log(graph);
        console.log(store);

              update();

              //	general update pattern for updating the graph
              function update() {
                //	UPDATE
                node = node.data(baseNodes, function(d) { return d.id;});
                //	EXIT
                node.exit().remove();
                //	ENTER
                var newNode = node.enter().append("circle")
                  .attr("class", "node")
                  .attr("r", radius)
                  .attr("fill", function(d) {return color(d.group);});

                  newNode.append("title")
                    .text(function(d) { return "proj: " + d.proj + "\n" + "id: " + d.id; });
                //	ENTER + UPDATE
                node = node.merge(newNode);

                //	UPDATE
                link = link.data(baseLinks, function(d) { return d.id;});
                //	EXIT
                link.exit().remove();
                //	ENTER
                newLink = link.enter().append("line")
                  .attr("class", "link");

                newLink.append("title")
                    .text(function(d) { return "source: " + d.source + "\n" + "target: " + d.target; });
                //	ENTER + UPDATE
                link = link.merge(newLink);

                //	update simulation nodes, links, and alpha
                simulation
                  .nodes(baseNodes)
                  .on("tick", ticked);

                simulation.force("link")
                  .links(baseLinks);

                simulation.alpha(1).alphaTarget(0).restart();
              }

              function filter() {
                //	add and remove nodes from data based on type filters
                store.nodes.forEach(function(n) {
                  if (!typeFilterList.includes(n.proj) && n.filtered) {
                    n.filtered = false;
                    graph.nodes.push($.extend(true, {}, n));
                  } else if (typeFilterList.includes(n.proj) && !n.filtered) {
                    n.filtered = true;
                    graph.nodes.forEach(function(d, i) {
                      if (n.id === d.id) {
                        graph.nodes.splice(i, 1);
                      }
                    });
                  }
                });

                //	add and remove links from data based on availability of nodes
                store.links1.forEach(function(l) {
                  if (!(typeFilterList.includes(l.sourceGroup) || typeFilterList.includes(l.targetGroup)) && l.filtered) {
                    l.filtered = false;
                    graph.links1.push($.extend(true, {}, l));
                  } else if ((typeFilterList.includes(l.sourceGroup) || typeFilterList.includes(l.targetGroup)) && !l.filtered) {
                    l.filtered = true;
                    graph.links1.forEach(function(d, i) {
                      if (l.id === d.id) {
                        graph.links1.splice(i, 1);
                      }
                    });
                  }
                });
              }
              */

        function resetGraph() {
          linkElements.attr('stroke', function(d) {
            return color(d.class)
          })
        }
        
        // select node is called on every click
        // we either update the data according to the selection
        // or reset the data if the same node is clicked twice
        function selectNode(selectedNode, e) {
          if(typeof(e) === 'object') e.preventDefault()
          if (selectedId === selectedNode.id) {
            console.log('11111')
            selectedId = undefined
            resetData()
            updateSimulation()
            resetGraph()
            // console.log('linkElements : ',  linkElements)
            // linkElements.enter().append('line')
            // //          .attr('stroke-width',1.2)
            // .attr('stroke', function(d) {
            //   return color(d.class)
            // })
          } else {
            console.log('22222')
            selectedId = selectedNode.id
            // updateData(selectedNode)
            updateSimulation()
            $("#attributepane").show();
            $("#attributepane-left").hide();

            var neighbors = getNeighbors(selectedNode)

            // we modify the styles to highlight selected nodes
            nodeElements.attr('fill', function (node) {
              return getNodeColor(node, neighbors)
            })
            //      textElements.attr('fill', function (node) { return getTextColor(node, neighbors) })
            linkElements.attr('stroke', function (link) {
              return getLinkColor(selectedNode, link)
            })
          }

          if (selectedNode.node_type == '상점') {
            document.getElementById('name').innerHTML = '<strong>업체명 </strong>' + selectedNode.label;
            document.getElementById('data').innerHTML = '<strong>주소</strong> 서울시 ' + selectedNode.dist + ' ' + selectedNode.address +
              ' <br> <strong>전화번호 </strong> 02-' + selectedNode.phone +
              ' <br><br><strong>취급 품목, 공정</strong><br>' + selectedNode.descriptions;
            //document.getElementById('data').innerHTML =
          } else if (selectedNode.node_type == '공정') {
            document.getElementById('name').innerHTML = '<strong>공정명 </strong>' + selectedNode.label;
          } else {
            document.getElementById('name').innerHTML = '<strong>재료 및 품목 </strong>' + selectedNode.label;
          };

          // var neighbors = getNeighbors(selectedNode)

          // // we modify the styles to highlight selected nodes
          // nodeElements.attr('fill', function (node) {
          //   return getNodeColor(node, neighbors)
          // })
          // //      textElements.attr('fill', function (node) { return getTextColor(node, neighbors) })
          // linkElements.attr('stroke', function (link) {
          //   return getLinkColor(selectedNode, link)
          // })

          ul = document.createElement('ul');
          document.getElementById('link').appendChild(ul);

          nodes.forEach(function (node) {
            let li = document.createElement('li');
            ul.appendChild(li);

            li.innerHTML += node.label;
          });

          //find the nodes that are the neighbors by neighbors.id
          if (selectedNode.node_type == '상점') {
            document.getElementById('name').innerHTML = selectedNode.label;
            document.getElementById('data').innerHTML = '<strong>주소</strong> 서울시 ' + selectedNode.dist + ' ' + selectedNode.address +
              ' <br> <strong>전화번호 </strong> 02-' + selectedNode.phone +
              ' <br><br><strong>취급 품목, 공정</strong><br>' + selectedNode.descriptions;
          } else {
            document.getElementById('name').innerHTML = selectedNode.label;
          };
        }


        // select matiral and toggle all related materials
        function selectMaterialGroupOfNode(m) {
          const group = links.filter(l => l.prod === m)
          let allNeighborsIds = []
          let allNeighborsObj = []
          group.forEach(g => {
            const node = g.target
            const neighbors = getNeighbors(node)
            allNeighborsIds.push(neighbors)
            allNeighborsObj.push(node)
          })
          allNeighborsIds = allNeighborsIds.flat()
          linkElements.attr('stroke', function (link) {
            return allNeighborsIds.includes(link.target.id) ? 'green' : '#E5E5E5'
          })

          nodeElements.attr('fill', function (node) {
            return getNodeColor(node, allNeighborsIds)
          })
        }

        // select matiral and toggle all related materials
        function selectProcessGroupOfNode(p) {
          const group = links.filter(l => l.class === p)
          let allNeighborsIds = []
          let allNeighborsObj = []
          group.forEach(g => {
            const node = g.target
            const neighbors = getNeighbors(node)
            allNeighborsIds.push(neighbors)
            allNeighborsObj.push(node)
          })
          allNeighborsIds = allNeighborsIds.flat()
          linkElements.attr('stroke', function (link) {
            return allNeighborsIds.includes(link.target.id) ? 'green' : '#E5E5E5'
          })

          nodeElements.attr('fill', function (node) {
            return getNodeColor(node, allNeighborsIds)
          })
        }

        // this helper simple adds all nodes and links
        // that are missing, to recreate the initial state
        function resetData() {
          var nodeIds = nodes.map(function (node) {
            return node.id
          })
          baseNodes.forEach(function (node) {
            if (nodeIds.indexOf(node.id) === -1) {
              nodes.push(node)
            }
          })
          links = baseLinks
        }

        // diffing and mutating the data
        function updateData(selectedNode) {
          var neighbors = getNeighbors(selectedNode)
          var newNodes = baseNodes.filter(function (node) {
            return neighbors.indexOf(node.id) > -1 || node.level === 1
          })

          var diff = {
            removed: nodes.filter(function (node) {
              return newNodes.indexOf(node) === -1
            }),
            added: newNodes.filter(function (node) {
              return nodes.indexOf(node) === -1
            })
          }
          console.log('diff : ', diff)

          diff.removed.forEach(function (node) {
            nodes.splice(nodes.indexOf(node), 1)
          })
          diff.added.forEach(function (node) {
            nodes.push(node)
          })

          links = baseLinks.filter(function (link) {
            return link.target.id === selectedNode.id || link.source.id === selectedNode.id
          })
        }

        function updateGraph() {
          ///////////////////

          // links
          linkElements = linkGroup.selectAll('line')
            .data(links, function (link) {
              return link.target.id + link.source.id
            })

          linkElements.exit().remove()
          
          var linkEnter = linkElements
            .enter().append('line')
            .attr('stroke', function(d) {
              return color(d.class)
            })
            .attr("stroke-opacity", 0.6)
            //'rgba(0, 50.2, 99.61, 0.3)'
            .style("stroke-width", function (d) {
              return Math.sqrt(d.weight) * 2;
            });
          linkElements = linkEnter.merge(linkElements)

          ///////////////////
          /*        linkElements.forEach(function(link){
                      if (!link.source["linkCount"]) link.source["linkCount"] = 0;
                      if (!link.target["linkCount"]) link.target["linkCount"] = 0;
                      link.source["linkCount"]++;
                      link.target["linkCount"]++;
                    });*/

          // nodes
          nodeElements = nodeGroup.selectAll('.path')
            .data(nodes, function (node) {
              return node.id
            })

          nodeElements.exit().remove()

          var nodeEnter = nodeElements
            .enter()
            .append("path")
            .attr("d", d3.symbol()
              .type(function (d) {
                return shape(d.node_type);
              })
              .size(0) // not to display nodes
              //.size( function(d) { return d.group *10; })
            )
            .attr("fill", 'white')
            //d => color(d.node_type)
            .call(dragDrop)

          nodeElements = nodeEnter.merge(nodeElements)
          // texts
          textElements = textGroup.selectAll('text')
            .data(nodes, function (node) {
              return node.id
            })
          textElements.exit().remove()

          var textEnter = textElements
            .enter()
            .append('text')
            .text(function (d) {
              return d.label
            })
                //  .attr('font-size', 3)
            .attr("font-size", function (d) {
              const data = links.find(l => {
                return d.id == l.source || d.id == l.target
              })
              return data ? Math.sqrt(data.weight) * 7 : 11
            })
            .attr("font-family", "Noto Sans KR")
            .attr("x", 0)
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .attr("class", "label-txt")
            .attr("filter", "url(#addbackground)")
            //          .attr("stroke", "white")
            //          .attr("stroke-width", ".7px")
            .on('click', selectNode);
          //        .attr('color','rgba(255, 255, 255, 1)')
          textElements = textEnter.merge(textElements)
        }


        ////////////////////////////////////////////////////////////////
        function centerNode(xx, yy){
          g.transition()
          // .duration(500)
          // .attr("transform", "translate(" + (width/2 - xx) + "," + (height/2 - yy) + ")scale(" + 1 + ")")
          .attr("transform", "translate(" + xx + "," + yy + ")scale(" + 1 + ")")
        }
      
        function handleZoom() {
          if (linkGroup) {
            linkGroup.attr("transform", d3.event.transform);
          }
          if (nodeGroup) {
            nodeGroup.attr("transform", d3.event.transform);
          }
          if (textGroup) {
            textGroup.attr("transform", d3.event.transform);
          }
        };

        function updateSimulation() {
          updateGraph()

          simulation.nodes(nodes).on('tick', () => {

            nodeElements
              .attr('transform', function (d) {
                return 'translate(' + d.x + ',' + d.y + ')';
              });

            linkElements
              .attr('x1', function (link) {
                return link.source.x
              })
              .attr('y1', function (link) {
                return link.source.y
              })
              .attr('x2', function (link) {
                return link.target.x
              })
              .attr('y2', function (link) {
                return link.target.y
              })

            textElements
              .attr('x', function (node) {
                return node.x
              })
              .attr('y', function (node) {
                return node.y
              })
          })

          simulation.force('link').links(links)
          simulation.alphaTarget(0).restart()
        }

        // last but not least, we call updateSimulation
        // to trigger the initial render
        updateSimulation()

        function autocomplete(inp, {
          keywords,
          nodes,
          processClassName,
          materialClassName
        }) {
          console.log('keywords : ', keywords)
          /*the autocomplete function takes two arguments,
          the text field element and an array of possible autocompleted values:*/
          var currentFocus;
          const nameField = document.querySelector("#autocomplete-list .name.field");
          const processField = document.querySelector("#autocomplete-list .process.field");
          const materialField = document.querySelector("#autocomplete-list .material.field");
          /*execute a function when someone writes in the text field:*/
          inp.addEventListener("input", function (e) {
            var val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) return false;
            currentFocus = -1;
            
            // append materialClassName to list
            materialClassName.forEach(m => {
              let materialFieldItem = document.createElement("DIV")
              materialFieldItem.setAttribute("class", "autocomplete-item material-field-item")
              materialFieldItem.addEventListener('click',() => {
                selectMaterialGroupOfNode(m)
              })
              materialFieldItem.innerHTML = "<span>" + m + "</span>"
              materialField.append(materialFieldItem)
            })

            // append processClassName to list
            processClassName.forEach(p => {
              let processFieldItem = document.createElement("DIV")
              processFieldItem.setAttribute("class", "autocomplete-item")
              processFieldItem.addEventListener('click',() => {
                selectProcessGroupOfNode(p)
              })
              processFieldItem.innerHTML = "<span>" + p + "</span>"
              processField.append(processFieldItem)
            })
            for (let i = 0; i < keywords.length; i++) {
              /*check if the item starts with the same letters as the text field value:*/
              if (Object.values(keywords[i]).filter(k => k.includes(val)).length > 0) {
                /*create a DIV element for each matching element:*/
                const nameFieldElement = document.createElement("DIV");
                nameFieldElement.addEventListener("click", function (e) {return selectNode(nodes[i],e)});
                nameFieldElement.setAttribute("class", "autocomplete-item");
                nameFieldElement.innerHTML = "<span class='title'>" + keywords[i].name + "</span><br>" +
                  "<span>" + nodes[i].address + "</span>"
                /*insert a input field that will hold the current array item's value:*/
                nameFieldElement.innerHTML += "<input type='hidden' value='" + keywords[i].name + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                nameFieldElement.addEventListener("click", function (e) {
                  /*insert the value for the autocomplete text field:*/
                  inp.value = this.getElementsByTagName("input")[0].value;
                  /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
                  closeAllLists(nameField, processField, descriptionsField);
                });

                // descriptionFieldElement.innerHTML = "<span>" + nodes[i].descriptions + "</span>"
                // productFieldElement.innerHTML = "<span>" + nodes[i].products + "</span>"
                nameField.appendChild(nameFieldElement);
                // descriptionsField.append(descriptionFieldElement)
                // productsField.append(productFieldElement)
              }
            }
          });
          /*execute a function presses a key on the keyboard:*/
          inp.addEventListener("keydown", function (e) {
            var x = document.querySelector("#autocomplete-list .name.field");
            if (x) x = x.getElementsByClassName("autocomplete-item");
            if (e.keyCode === 40) {
              /*If the arrow DOWN key is pressed,
              increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode === 38) { //up
              /*If the arrow UP key is pressed,
              decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode === 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
              }
            }
          });

          function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
          }

          function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
              x[i].classList.remove("autocomplete-active");
            }
          }

          function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            nameField.innerHTML = ''
            processField.innerHTML = ''
            materialField.innerHTML = ''
          }
          // /*execute a function when someone clicks in the document:*/
          document.addEventListener("click", function () {
            closeAllLists();
          });
        }

        // document.getElementById("close").addEventListener ("click", closeplane, false);
        // function closeplane() {
        //   console.log('qweqweqwe')
        //   resetData()
        //   updateSimulation()
        //   $("#attributepane").hide();
        //   $("#attributepane-left").show();
        // }

        document.getElementById("attributepane-close").addEventListener("click", function (e) {
          e.preventDefault();
          resetData()
          updateSimulation()
          resetGraph()
          $("#attributepane").hide();
          $("#attributepane-left").show();
        });

        document.getElementById("reset-map").addEventListener("click", function (e) {
          e.preventDefault();
          resetData()
          updateSimulation()
          resetGraph()
        });

        document.querySelector('.search-box-wrapper').addEventListener('click', function() {
          const processField = document.querySelector("#autocomplete-list .process.field");
          const materialField = document.querySelector("#autocomplete-list .material.field");
          materialClassName.forEach(m => {
            let materialFieldItem = document.createElement("DIV")
            materialFieldItem.setAttribute("class", "autocomplete-item material-field-item")
            materialFieldItem.addEventListener('click',() => {
              selectMaterialGroupOfNode(m)
            })
            materialFieldItem.innerHTML = "<span>" + m + "</span>"
            materialField.append(materialFieldItem)
          })

          processClassName.forEach(p => {
            let processFieldItem = document.createElement("DIV")
            processFieldItem.setAttribute("class", "autocomplete-item")
            processFieldItem.addEventListener('click',() => {
              selectProcessGroupOfNode(p)
            })
            processFieldItem.innerHTML = "<span>" + p + "</span>"
            processField.append(processFieldItem)
          })
        })

        const autocompleteListName = nodes.map(n => ({name: n.name, descriptions: n.descriptions, prod:n.prod}))

        materialClassName
        autocomplete(
          document.getElementById("searchwrapper"), {
            keywords: autocompleteListName,
            nodes,
            processClassName,
            materialClassName
          }
        );

    }
  });
})

var materialClassName = ["가스",
"가전제품(전기전자제품)",
"간판",
"고무",
"공구",
"과학용품",
"광고",
"귀금속",
"금속",
"기어",
"기획",
"납",
"단자",
"망",
"명판",
"모터",
"목제품",
"미터(메타)",
"바퀴",
"박스",
"밸브",
"버스바(부스바)",
"베어링",
"벨트",
"벽지및장판",
"볼트,너트",
"봉",
"부동산중개",
"부품",
"분전반및배전반",
"비닐",
"센서",
"스위치",
"스테인리스",
"스폰지",
"식기",
"아크릴",
"알루미늄",
"어댑터(아담터)",
"열쇠(키)",
"우레탄",
"원석,돌,스톤",
"위생용도자기",
"유리",
"유리및창호",
"의료",
"인테리어상담",
"인테리어제품",
"인테리어철물",
"자석",
"전구",
"전선",
"조명자재",
"조명제품",
"철",
"커넥터",
"컨버터및인버터",
"컴프레셔(콤프레샤)",
"케이스",
"튜브",
"파이프",
"팬",
"패킹(바킹,박킹)",
"펌프",
"표지판",
"풀리",
"퓨즈(휴즈)",
"플라스틱",
"필름",
"합금",
"합성섬유",
"핸들",
"현수막",
"호스",
"회로",
"NA"]

var processClassName = ["기계제작1","기계제작2","부품제작","각인","자수","용접","시공","후처리1","후처리2","인쇄","회로설계","계측계 교정","접지","기계제작3","NA"]