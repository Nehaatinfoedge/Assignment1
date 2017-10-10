$( document ).ready( function( ) {
				
	var fileArray = {
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
	 	'11':{'name':'4','ext':'folder-icon-leftPanel','date':'2017-09-24 9:06 PM','size':'2MB','child':{'0':{'name':'8.1.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'1':{'name':'8.2.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''},'2':{'name':'8.3.jpg','ext':'image','date':'2017-09-24 9:06 PM','size':'24MB','child':''}}},
	 	'12':{'name':'1.mkv','ext':'video','date':'2017-09-24 9:06 PM','size':'19MB'},
	 	'13':{'name':'2.mkv','ext':'video','date':'2017-09-24 9:06 PM','size':'2MB'}
	};
	

	$('#viewTab').on('click',function(){
		if($('.stickyMenu').hasClass("show")){
			$('.stickyMenu').removeClass('show').addClass('hide');
			$(this).css({'background-color': '#fff'});
		}
		else{
			$('.stickyMenu').removeClass('hide').addClass('show');
			$(this).css({'background-color': '#DCDCDC'});
		}

	});

	$('#mediumIcons').on('mouseover',function(){
		var gridView = getHTMLForRightPanel();
		$('#gridView').html(gridView);
		$('#gridView').removeClass('hide').addClass('show');
		$('#listView').removeClass('show').addClass('hide');
		//$('.stickyMenu').removeClass('show').addClass('hide');

	})
	$('#details').on('click',function(){
		$('#listView').removeClass('hide').addClass('show');
		$('#gridView').removeClass('show').addClass('hide');
		$('.stickyMenu').removeClass('show').addClass('hide');
	});
	$('#mediumIcons').on('click',function(){
		$('#gridView').removeClass('hide').addClass('show');
		$('#listView').removeClass('show').addClass('hide');
		$('.stickyMenu').removeClass('show').addClass('hide');
	});
	$('#details').on('mouseover',function(){
		var tableData = getListViewHtml();
		$('#listView').removeClass('hide').addClass('show');
		$('#gridView').removeClass('show').addClass('hide');
		$('#listView').html(tableData);
		
		$('th').each(function(col) {
			$(this).hover(
				function() { $(this).addClass('focus'); },
				function() { $(this).removeClass('focus'); }
				);
	    	$(this).click(function() {
			      if ($(this).is('.asc')) {
			        $(this).removeClass('asc');
			        $(this).addClass('desc selected');
			        sortOrder = -1;
			      }
			      else {
			        $(this).addClass('asc selected');
			        $(this).removeClass('desc');
			        sortOrder = 1;
			      }
			      $(this).siblings().removeClass('asc selected');
			      $(this).siblings().removeClass('desc selected');
			      var arrData = $('table').find('tbody >tr:has(td)').get();
			      arrData.sort(function(a, b) {
			        var val1 = $(a).children('td').eq(col).text().toUpperCase();
			        var val2 = $(b).children('td').eq(col).text().toUpperCase();
			        if($.isNumeric(val1) && $.isNumeric(val2))
			        return sortOrder == 1 ? val1-val2 : val2-val1;
			        else
			           return (val1 < val2) ? -sortOrder : (val1 > val2) ? sortOrder : 0;
			      });
			      $.each(arrData, function(index, row) {
			        $('tbody').append(row);
			      });
		  	});
		});
		//$('.stickyMenu').removeClass('show').addClass('hide');
	})
				
	$(document).click(function(e) {

  		if( e.target.class != 'stickyMenu' && e.target.id!=='viewTab') {
    		$('.stickyMenu').removeClass('show').addClass('hide');
			//$('#gridView').removeClass('hide').addClass('show');
			//$('#listView').removeClass('show').addClass('hide');
  		}
	});

	function getHTMLForRightPanel(){
		var i=1
			, j=1
			, content = '<ul class="one">'
			, innerContent = '';
			//, colOuter = '<li><ul class="oh" style="float:left;width:70px;">';
		$.each(fileArray,function(key,value){
			innerContent += '<li><ul><li><img src="images/img1-rightPanel.png"></li><li class="label" style="padding-left:15px;">'+value.name+'</li></ul></li>';
			
			if($(value.child).length>0){
				$.each(value.child,function(k,v){
					innerContent += '<li><ul><li><img src="images/img1-rightPanel.png"></li><li class="label" style="padding-left:15px;">'+v.name+'</li></ul></li>';
				});
			}

		});
		
		content += innerContent + '</ul>';
		
		return content;

	}
	var gridView = getHTMLForRightPanel();
	$('#gridView').html(gridView);
	$('#gridView').removeClass('hide').addClass('show');
	$('#listView').removeClass('show').addClass('hide');
	function getListViewHtml(){
		var table='',
			tableHeader='',
			tableContent='';
		table = '<table>';
		tableHeader = '<tr><th><font color=#C0C0C0>Name</font></th><th><font color=#C0C0C0>Date modified</font></th><th><font color=#C0C0C0>Type</font></th><th><font color=#C0C0C0>Size</font></th></tr>';
		$.each(fileArray,function(key,value){
		 	tableContent += '<tr><td><ul class="oh fl"><li><img src="images/folder-icon-leftPanel.png"></li><li>'+value.name+'</li></ul></td><td><font color=#C0C0C0>'+value.date+'</font></td><td><font color=#C0C0C0>'+value.ext+'</font></td><td><font color=#C0C0C0>'+value.size+'</font></td></tr>';
		 	if($(value.child).length>0){
				$.each(value.child,function(k,v){
					tableContent += '<tr><td><ul class="oh fl"><li><img src="images/folder-icon-leftPanel.png"></li><li>'+v.name+'</li></ul></td><td><font color=#C0C0C0>'+v.date+'</font></td><td><font color=#C0C0C0>'+v.ext+'</font></td><td><font color=#C0C0C0>'+v.size+'</font></td></tr>';
				});
			}

		});
		  
		table += tableHeader + tableContent+ '</table>';
		return table;
	}
	function getHtml(value){
		var subHtml=''
			, subHtml1=''
			, finalArray=[];
		if($(value.child).length>0){
			subHtml1 = '<li><img src="images/img4-leftPanel.png"></li>';
		}
		subHtml = '<li><img src="images/img4-leftPanel.png"></li>';
		if(value.ext=='doc' || value.ext=='folder'){
			subHtml += '<li><img src="images/folder-icon-leftPanel.png"></li>';
			subHtml1 += '<li><img src="images/folder-icon-leftPanel.png"></li>';
		}
		else if(value.ext=='image') {
			subHtml += '<li><img src="images/file-pictures-leftPanel.png"></li>';
			subHtml1 += '<li><img src="images/file-pictures-leftPanel.png"></li>';
		}
		else if(value.ext=='video'){
			subHtml += '<li><img src="images/file-video-leftPanel.png"></li>';
			subHtml1 += '<li><img src="images/file-pictures-leftPanel.png"></li>';
		}
		else if(value.ext=='music'){
			subHtml += '<li><img src="images/file-music-leftPanel.png"></li>';
			subHtml1 += '<li><img src="images/file-pictures-leftPanel.png"></li>';
		}
		subHtml += '<li>'+value.name+'</li>';
		subHtml1 += '<li>'+value.name+'</li>';
		finalArray['subhtml'] = subHtml;
		finalArray['subhtml1'] = subHtml1;
		return finalArray;
	}
	$.each(fileArray,function(key,value){
		var html='',
			content;
		html = '<li><a><ul class="oh">';
		content = getHtml(value);
		html +=content['subhtml'];

		html += '</ul></a><ul class="oh childul">';
		if($(value.child).length>0){
			$.each(value.child,function(k,v){
				var childHtml = '<li><a><ul class="oh">'
				, innerContent = getHtml(v);
				childHtml += innerContent['subhtml'];
				childHtml += '</ul></a><ul class="oh childul">';
				//childHtml += innerContent['subhtml1'];
				html += childHtml;
			});
		}else{	
			html += content['subhtml1'];
		}
		html += '</ul></li>';
			$('.tree>ul').append(html);
	});
	$( '.tree li' ).each( function() {
			if( $( this ).children( 'ul' ).length > 0 ) {
					$( this ).addClass( 'parent' ); 
					$(this).find('a li:first img').attr('src','images/arrow-leftPanel.png');    
			}
	});
	
	$( '.tree li.parent > a' ).click( function( ) {
			$( this ).parent().toggleClass( 'active' );
			$( this ).parent().children( 'ul' ).slideToggle( 'fast' );
			var currentSrc = $( this ).parent().children( 'ul' ).parent().find('a li:first img').attr('src');
			if(currentSrc.indexOf('img4-leftPanel.png')>=0)
				$( this ).parent().children( 'ul' ).parent().find('a li:first img').attr('src','images/arrow-leftPanel.png');
			else
				$( this ).parent().children( 'ul' ).parent().find('a li:first img').attr('src','images/img4-leftPanel.png');
	});

	var that = $('input.suggester')
        ,   box = $('<ul></ul>')
            .css({
                position: 'absolute',
                backgroundColor: 'white',
                border: '1px solid #999',
                paddingLeft: '0px',
                paddingRight: '0px',
                margin: 0,
                paddingTop: '3px',
                paddingBottom: '3px',
                listStyleType: 'none',
                minWidth: that.width() + 4,
                color: '#555',
                textAlign: 'left'
            })
            .hide()
            .appendTo('body')
        ,   wordsJson = fileArray//['January','February','March','April','May','June','July','August','September','October','November','December']
        ,   enteredValue = that.val()
        ,   to_complete = enteredValue.split(' ').pop().toLowerCase()
        ,   selection
        ,   length
        ,   active = false
        ,   hide = function(){
                box.hide();
                active = false;
            }
        ,   show = function(){
                var offset = that.offset();
                box.css({
                    top: offset.top + that.height() + 7,
                    left: offset.left
                }).empty().show();
                selection = null;
                active = true;
            }
        ,   arrow_up = 38
        ,   arrow_down = 40
        ,   enter = 13
        ,   tab = 9
        ,   esc = 27
        ,   boldString = function (str, find){
                var re = new RegExp(find, 'g');
                return str.replace(re, '<b>'+find+'</b>');
            };
    $('.tokenize .token-search input.suggester').keyup(function(event) {
        enteredValue = that.val();
        to_complete = enteredValue.split(' ').pop().toLowerCase()
        if(to_complete.length >= 1){
        	var suggestions
        		, suggestionsOuter
        		, suggestionsInner
        		, newArray =[]
        		, newInnerArray = []
        	$.each(wordsJson,function(key,value){
        		
        		 newArray.push(value.name);
        		 //newArray.push(value.ext);
        		 //newArray.push(value.date);
        		 //newArray.push(value.date);
        		suggestionsOuter = $.grep(newArray, function(word, i){
                	return word.toLowerCase().indexOf(to_complete.toLowerCase()) !== -1 
            	});	
            	if($(value.child).length>0){
	            	$.each(value.child,function(k,v){
	            		newInnerArray.push(v.name);
	            		suggestionsInner = $.grep(newInnerArray, function(word, i){
	                		return word.toLowerCase().indexOf(to_complete.toLowerCase()) !== -1 
	            		});	
	            	})
            	}
        	});
        	var multipleArrays = [suggestionsOuter,suggestionsInner];
        	var suggestions = [].concat.apply([], multipleArrays);
        	
            if(suggestions.length){
                selection = null;
                length = suggestions.length;
                show()
                $.each(suggestions, function(i, suggestion){
                    var postfix = suggestion.slice(to_complete.length, suggestion.length);
                    var text = enteredValue + postfix;
                    //$('<li>' + enteredValue + '<em style="color: black">' + postfix + '</em>' + '</li>')
                    $('<li><em style="color: black">' + boldString(suggestion,enteredValue) + '</em></li>')
                        .css({
                            paddingleft: 0,
                            paddingRight: 0,
                            margin: 0,
                            paddingLeft: '5px',
                            paddingRight: '5px',
                            cursor: 'pointer'
                        })
                        .data('text', suggestion)
                        .hover(
                            function(){
                                $(this).css('background-color', 'LightBlue');
                            },
                            function(){
                                $(this).css('background-color', 'transparent');
                            }
                        )
                        .keyup(function(){
	     					
	 					})
                        .click(function(){
                            hide()
	     					// Show only matching TR, hide rest of them
	    					$.each($("#gridView ul li"), function() {
	    						//$.each($(this).children(), function() {
    								$.each($(this).children(), function() {
    									if($(this).find('li:eq(1)').html()!=null)
    									{
    										if($(this).find('li:eq(1)').html().toLowerCase().indexOf(suggestion.toLowerCase()) === -1)
    											$(this).hide();
    										else
    											$(this).show();
    									}
    									console.log($(this).find('li:eq(1)').html());
    								})
	    						//})
	     					});
	     					$.each($("#listView table"), function() {
	    						$.each($(this).children(), function() {
    								$.each($(this).children(), function() {
    									if($(this).find('li:eq(1)').html()!=null)
    									{
    										if($(this).find('li:eq(1)').html().toLowerCase().indexOf(suggestion.toLowerCase()) === -1)
    											$(this).hide();
    										else
    											$(this).show();
    									}
    									console.log($(this).find('li:eq(1)').html());
    								})
	    						})
	     					});
                            /*var html = '<li class="token" data-value="1"><a class="dismiss">×</a><span>'+suggestion+'</span></li>';
                            if(that.parent().parent().find('li').length>1)
                                that.parent().parent().find('> li:nth-last-child(1)').before(html).focus();
                            else
                                that.parent().parent().prepend(html).focus();*/
                            that.val(suggestion).focus();
                        })
                        .appendTo(box)
                });
            }
            else
            {
                hide();
            }
        }
        else {
            hide();
        }
    });

    $(".suggester").keyup(function(){
	    searched = this;
     	// Show only matching TR, hide rest of them
		$.each($("#gridView ul li"), function() {
			//$.each($(this).children(), function() {
				$.each($(this).children(), function() {
					if($(this).find('li:eq(1)').html()!=null)
					{
						if($(this).find('li:eq(1)').html().toLowerCase().indexOf($(searched).val().toLowerCase()) === -1){
							$(this).hide();
							/*setTimeout(function(){
								reArrange();
							});*/
						}
						else{
							$(this).show();
							/*setTimeout(function(){
								reArrange();
							});*/
						}
					}
					console.log($(this).find('li:eq(1)').html());
				})
			//})
		});
		$.each($("#listView table"), function() {
			$.each($(this).children(), function() {
				$.each($(this).children(), function() {
					if($(this).find('li:eq(1)').html()!=null)
					{
						if($(this).find('li:eq(1)').html().toLowerCase().indexOf($(searched).val().toLowerCase()) === -1)
							$(this).hide();
						else
							$(this).show();
					}
					console.log($(this).find('li:eq(1)').html());
				})
			})
		});
		
	 });
    var reArrange = function(){
		var size = 10,
      	$ul  = $("ul.one"),
      	$lis = $ul.children().filter(':gt(' + (size - 1) + ')'),
      	loop = Math.ceil($lis.length / size),
      	i    = 0;

  		$ul.css('float', 'left').wrap("<div style='overflow: hidden;float: left;width: 1080px;'></div>");

  		for (; i < loop; i = i + 1) {
    		$ul = $("<ul />").css('float', 'left').append($lis.slice(i * size, (i * size) + size)).insertAfter($ul);
  		}
	};
    setTimeout(function(){
    	reArrange();
	},10);
	
					
});