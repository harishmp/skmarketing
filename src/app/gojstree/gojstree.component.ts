import { Component, OnInit } from '@angular/core';
import * as d3 from '../../../src/assets/js/d3.v3.min.js';

@Component({
  selector: 'app-gojstree',
  templateUrl: './gojstree.component.html',
  styleUrls: ['./gojstree.component.css']
})
export class GojstreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var SampleData= {name : "root",
  "children": [
    { "name" : "child2",
      "children": [
        {name : "child3",
		 "children": [
        {name : "child3",
		 size : 10
		},
        {name : "child4",
		 size : 10
		}],
		},
        {name : "child4",
		 size : 10
		}
      ]
    }
  ]
};

var root = SampleData;

var margin = {top: 100, right: 0, bottom: 100, left: 0},
		width =600 - margin.left - margin.right,
		height =  600 - margin.top - margin.bottom- 20;

	var svg = d3.select("#heap")
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var size= [width, height];

    // Compute the layout.
    var tree = d3.layout.tree().size(size),
        nodes = tree.nodes(root),
        links = tree.links(nodes);
	
	console.log(links[1].source);
		
	var x = function(d) { return d.x; },
		y = function(d) { return d.y; };
		
	var diagonal = d3.svg.diagonal()
		.source(function(d) { return {"x":d.source.x, "y":(d.source.y+100)}; })            
		.target(function(d) { return {"x":(d.target.x), "y":d.target.y}; })
		.projection(function(d) { return [d.x, d.y]; });

    // Create the link lines.
    svg.selectAll(".link")
        .data(links)
		.enter()
		.append("path")
        .attr("class", "link")
        .attr("d", diagonal);

	svg.selectAll(".node")
        .data(nodes)
		.enter().append("rect")
        .attr("class", "node")
        .attr("width", 200)
		.attr("height", 100)
        .attr("x", function(d){  return x(d)-100;})
        .attr("y", function(d){  return y(d);});
  }

}
