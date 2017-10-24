function DefaultCtrl($scope) {
    $scope.order = 'name';
    $scope.reverse = false;
    $scope.fileArray = {
        '0':{'name':'1.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},
        '1':{'name':'2.jpg','ext':'image','date':'2017-09-24 9:10 PM','size':'20MB','child':''},
        '2':{'name':'3.jpg','ext':'image','date':'2017-09-24 11:06 PM','size':'19MB','child':{'0':{'name':'3.1.jpg','ext':'image','date':'2017-09-24  9:06 PM','size':'24MB','child':''},'1':{'name':'3.2.jpg','ext':'image','date':'2017-09-24  9:06 PM','size':'24MB','child':''}}},
        '3':{'name':'4.jpg','ext':'image','date':'2017-09-24 08:06 PM','size':'2MB'},
        '4':{'name':'1.mp4','ext':'music','date':'2017-09-24 03:06 PM','size':'24MB'},
        '5':{'name':'2.mp4','ext':'music','date':'2017-09-24 04:06 PM','size':'20MB'},
        '6':{'name':'3.mp4','ext':'music','date':'2017-09-24 05:06 PM','size':'19MB'},
        '7':{'name':'4.mp4','ext':'music','date':'2017-09-24 07:85 PM','size':'2MB'},
        '8':{'name':'1','ext':'folder','date':'2017-09-24 02:06 PM','size':'24MB','child':{'0':{'name':'8.1.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'1':{'name':'8.2.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'2':{'name':'8.3.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''}}},
        '9':{'name':'2','ext':'folder','date':'2017-09-24 9:06 PM','size':'20MB','child':{'0':{'name':'8.1.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'1':{'name':'8.2.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'2':{'name':'8.3.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''}}},
        '10':{'name':'3','ext':'folder','date':'2017-09-24 9:06 PM','size':'19MB','child':{'0':{'name':'8.1.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'1':{'name':'8.2.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'2':{'name':'8.3.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''}}},
        '11':{'name':'4','ext':'folder','date':'2017-09-24 9:06 PM','size':'2MB','child':{'0':{'name':'8.1.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'1':{'name':'8.2.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'2':{'name':'8.3.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''}}},
        '12':{'name':'1.mkv','ext':'video','date':'2017-09-24 9:06 PM','size':'19MB'},
        '13':{'name':'2.mkv','ext':'video','date':'2017-09-24 9:06 PM','size':'2MB'}
    };
    $scope.names = [];
    $scope.fileArrayManipulated = [];
    $.each($scope.fileArray,function(key,value){
        $scope.names.push(value.name);
        if($(value.child).length>0){
                $.each(value.child,function(k,v){
                    $scope.names.push(v.name);
                });
            }
    });
    $scope.roleList = $scope.fileArray;
    function manipulateFileArray(){
        $.each($scope.fileArray,function(key,value){
            $scope.fileArrayManipulated.push(value);
            if($(value.child).length>0){
                $.each(value.child,function(k,v){
                    $scope.fileArrayManipulated.push(v);
                    delete $scope.fileArray[value.child];
                });
            }
            else
                delete $scope.fileArray[value.child];
        });
    }
    manipulateFileArray();

    $scope.roleList2 = [
        { "roleName" : "User", "roleId" : "role1", "children" : [
          { "roleName" : "subUser1", "roleId" : "role11", "collapsed" : true, "children" : [] },
          { "roleName" : "subUser2", "roleId" : "role12", "collapsed" : true, "children" : [
            { "roleName" : "subUser2-1", "roleId" : "role121", "children" : [
              { "roleName" : "subUser2-1-1", "roleId" : "role1211", "children" : [] },
              { "roleName" : "subUser2-1-2", "roleId" : "role1212", "children" : [] }
            ]}
          ]}
        ]},

        { "roleName" : "Admin", "roleId" : "role2", "children" : [
          { "roleName" : "subAdmin1", "roleId" : "role11", "collapsed" : true, "children" : [] },
          { "roleName" : "subAdmin2", "roleId" : "role12", "children" : [
            { "roleName" : "subAdmin2-1", "roleId" : "role121", "children" : [
              { "roleName" : "subAdmin2-1-1", "roleId" : "role1211", "children" : [] },
              { "roleName" : "subAdmin2-1-2", "roleId" : "role1212", "children" : [] }
            ]}
          ]}
        ]},

        { "roleName" : "Guest", "roleId" : "role3", "children" : [
          { "roleName" : "subGuest1", "roleId" : "role11", "children" : [] },
          { "roleName" : "subGuest2", "roleId" : "role12", "collapsed" : true, "children" : [
            { "roleName" : "subGuest2-1", "roleId" : "role121", "children" : [
              { "roleName" : "subGuest2-1-1", "roleId" : "role1211", "children" : [] },
              { "roleName" : "subGuest2-1-2", "roleId" : "role1212", "children" : [] }
            ]}
          ]}
        ]}
      ];
    $scope.roleList = [
                        {"collapsed" : true,'roleName':'1.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':[]},
                        {"collapsed" : true,'roleName':'2.jpg','ext':'image','date':'2017-09-24 9:10 PM','roleId':'20MB','children':[]},
                        {"collapsed" : true,'roleName':'3.jpg','ext':'image','date':'2017-09-24 11:06 PM','roleId':'19MB','children':[{"collapsed" : true,'roleName':'3.1.jpg','ext':'image','date':'2017-09-24  9:06 PM','roleId':'24MB','children':''},{"collapsed" : true,'roleName':'3.2.jpg','ext':'image','date':'2017-09-24  9:06 PM','roleId':'24MB','children':''}]},
                        {"collapsed" : true,'roleName':'4.jpg','ext':'image','date':'2017-09-24 08:06 PM','roleId':'2MB','children':[]},
                        {"collapsed" : true,'roleName':'1.mp4','ext':'music','date':'2017-09-24 03:06 PM','roleId':'24MB','children':[]},
                        {"collapsed" : true,'roleName':'2.mp4','ext':'music','date':'2017-09-24 04:06 PM','roleId':'20MB','children':[]},
                        {"collapsed" : true,'roleName':'3.mp4','ext':'music','date':'2017-09-24 05:06 PM','roleId':'19MB','children':[]},
                        {"collapsed" : true,'roleName':'4.mp4','ext':'music','date':'2017-09-24 07:85 PM','roleId':'2MB','children':[]},
                        {"collapsed" : true,'roleName':'1','ext':'folder','date':'2017-09-24 02:06 PM','roleId':'24MB','children':[{"collapsed" : true,'roleName':'8.1.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''},{"collapsed" : true,'roleName':'8.2.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''},{"collapsed" : true,'roleName':'8.3.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''}]},
                        {"collapsed" : true,'roleName':'2','ext':'folder','date':'2017-09-24 9:06 PM','roleId':'20MB','children':[{"collapsed" : true,'roleName':'8.1.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''},{"collapsed" : true,'roleName':'8.2.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''},{"collapsed" : true,'roleName':'8.3.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''}]},
                        {"collapsed" : true,'roleName':'3','ext':'folder','date':'2017-09-24 9:06 PM','roleId':'19MB','children':[{"collapsed" : true,'roleName':'8.1.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''},{"collapsed" : true,'roleName':'8.2.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''},{"collapsed" : true,'roleName':'8.3.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''}]},
                        {"collapsed" : true,'roleName':'4','ext':'folder','date':'2017-09-24 9:06 PM','roleId':'2MB','children':[{"collapsed" : true,'roleName':'8.1.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''},{"collapsed" : true,'roleName':'8.2.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''},{"collapsed" : true,'roleName':'8.3.jpg','ext':'image','date':'2017-09-24 9:06 PM','roleId':'24MB','children':''}]},
                        {"collapsed" : true,'roleName':'1.mkv','ext':'video','date':'2017-09-24 9:06 PM','roleId':'19MB','children':[]},
                        {"collapsed" : true,'roleName':'2.mkv','ext':'video','date':'2017-09-24 9:06 PM','roleId':'2MB','children':[]}
                    ];
      
      
    //roleList1 to treeview
   
    /*$scope.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];*/
}

var MyModule = angular.module('MyModule', [])
                      .controller('DefaultCtrl',DefaultCtrl)
                      .directive('autoComplete', function($timeout) {
                        return function(scope, iElement, iAttrs) {
                                iElement.autocomplete({
                                    source: scope[iAttrs.uiItems],
                                    select: function() {
                                        $timeout(function() {
                                          iElement.trigger('input');
                                        }, 0);
                                    }
                                });
                            };
                        })
                        . directive("sort", function() {
                            return {
                                restrict: 'A',
                                transclude: true,
                                template : 
                                  '<a ng-click="onClick()">'+
                                    '<span ng-transclude></span>'+ 
                                    '<i class="glyphicon" ng-class="{\'glyphicon-sort-by-alphabet\' : order === by && !reverse,  \'glyphicon-sort-by-alphabet-alt\' : order===by && reverse}"></i>'+
                                  '</a>',
                                scope: {
                                  order: '=',
                                  by: '=',
                                  reverse : '='
                                },
                                link: function(scope, element, attrs) {
                                  scope.onClick = function () {
                                    if( scope.order === scope.by ) {
                                       scope.reverse = !scope.reverse 
                                    } else {
                                      scope.by = scope.order ;
                                      scope.reverse = false; 
                                    }
                                  }
                                }
                            }
                        })
                        .directive("treeModel",function($compile){
                         return{
                            restrict:"A",
                            link:function(a,g,c){
                                var e=c.treeModel,
                                    h=c.nodeLabel || "label",
                                    d=c.nodeChildren || "children",
                                    k='<ul><li data-ng-repeat="node in '+e+'"><i class="collapsed" data-ng-show="node.'+d+'.length && node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><i class="expanded" data-ng-show="node.'+d+'.length && !node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><i class="normal" data-ng-hide="node.'+d+'.length"></i> <span data-ng-class="node.selected" data-ng-click="selectNodeLabel(node, $event)">{{node.'+h+'}}</span><div data-ng-hide="node.collapsed" data-tree-model="node.'+d+'" data-node-id='+(c.nodeId||"id")+" data-node-label="+h+" data-node-children="+d+"></div></li></ul>";
                                    e&&e.length&&(c.angularTreeview?(a.$watch(e,function(m,b){
                                        g.empty().html($compile(k)(a))
                                    },!1),a.selectNodeHead=a.selectNodeHead||function(a,b){
                                        b.stopPropagation&&b.stopPropagation();
                                        b.preventDefault&&b.preventDefault();
                                        b.cancelBubble=!0;b.returnValue=!1;
                                        a.collapsed=!a.collapsed},
                                        a.selectNodeLabel=a.selectNodeLabel||function(c,b){b.stopPropagation&&b.stopPropagation();
                                        b.preventDefault&&b.preventDefault();
                                        b.cancelBubble=!0;b.returnValue=!1;
                                        a.currentNode&&a.currentNode.selected&&(a.currentNode.selected=void 0);
                                        c.selected="selected";a.currentNode=c}):g.html($compile(k)(a)))
                                }
                            }
                        })
                        .filter('myFilter', function () {  
                            return function(inputs,filterValues) {
                                var output = [];
                                var index = 0;
                                if (typeof filterValues[index] !== 'undefined' && filterValues[index] !== null) {
                                    angular.forEach(inputs, function (input) {
                                        if (input.name.indexOf(filterValues[index]) !== -1)
                                            output.push(input);
                                    });
                                    return output;
                                }
                                else
                                    return inputs;
                            };
                        });