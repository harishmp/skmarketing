import { Component, OnInit } from '@angular/core';
// import * as orgchart from '../../../src/assets/js/orgchart.js';
// import * as $ from "jquery";

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   var datascource = {
  //     'name': 'Lao Lao',
  //     'title': 'general general',
  //     "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif",
  //     'children': [
  //       { 'name': 'Bo Miao', 
  //       'title': 'department general',
  //       "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif",
  //         'children': [
  //           { 'name': 'Li Xin', 
  //         'title': 'senior engineer',
  //         "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif",
  //        },
  //        { 'name': 'Li Xin2', 
  //         'title': 'senior engineer',
  //         "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif",
  //         'children': [
  //           { 'name': 'Pang Pang', 
  //           'title': 'engineer',
  //           "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif", },
  //           { 'name': 'Dan Dan', 
  //           'title': 'UE engineer',
  //           "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif", }
  //         ]
  //        }
  //       ]
  //       },
  //       { 'name': 'Su Miao', 
  //       'title': 'department general',
  //       "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif",
  //         'children': [
  //           { 'name': 'Tie Hua', 
  //           'title': 'senior engineer',
  //           "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif", },
  //           { 'name': 'Hei Hei', 
  //           'title': 'senior engineer',
  //           "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif",
  //             'children': [
  //               { 'name': 'Pang Pang', 
  //               'title': 'engineer',
  //               "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif", },
  //               { 'name': 'Dan Dan', 
  //               'title': 'UE engineer',
  //               "icon": "http://www.bigbiz.com/bigbiz/icons/ultimate/Comic/Comic13.gif", }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   };

  //   var oc = $('#chart-container').orgchart({
  //     'data' : datascource,
  //     'nodeContent': 'title',
  //     'draggable': true,
  //     'dropCriteria': function($draggedNode, $dragZone, $dropZone) {
  //       if($draggedNode.find('.content').text().indexOf('manager') > -1 && $dropZone.find('.content').text().indexOf('engineer') > -1) {
  //         return false;
  //       }
  //       return true;
  //     }
  //   });

  //   oc.$chart.on('nodedrop.orgchart', function(event, extraParams) {
  //     console.log('draggedNode:' + extraParams.draggedNode.children('.title').text()
  //       + ', dragZone:' + extraParams.dragZone.children('.title').text()
  //       + ', dropZone:' + extraParams.dropZone.children('.title').text()
  //     );
  //   });
  }

}
