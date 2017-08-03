(function($){function getGoogleChart(){var a=$('#watermark_type').val();var b=$('#watermark_color').val().substr(1);var c=$('#watermark_textsize').val();var d=$('#watermark_textalignment').val();var e=$('#watermark_outlinecolor').val().substr(1);var f=$('#watermark_textweight').val();var g=$('#watermark_text').val();var h=$('#watermark_bordercolor').val().substr(1);var i=$('#watermark_iconposition').val();var j=$('#watermark_iconname').val();var k=$('#watermark_iconsize').val();var l=$('#watermark_notetype').val();var m=$('#watermark_notesize').val();var n;if(a=='d_text_outline'){g=g.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+'%20'+'$2');n=a+'&chld='+b+'|'+c+'|'+d+'|'+e+'|'+f+'|'+g}if(a=='d_simple_text_icon'){g=g.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+'%20'+'$2');n=a+i+'&chld='+g+'|'+c+'|'+b+'|'+j+'|'+k+'|'+b+'|'+h}if(a=='d_fnote'){g=g.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+'|'+'$2');n=a+'&chld='+l+'|'+m+'|'+b+'|'+d+'|'+g}$('#watermark_example').attr('src','http://chart.apis.google.com/chart?chst='+n).load(function(){setTimeout(function(){watermarkPosition()},200)})}function getOriginalWidth(a){var t=new Image();t.src=a;return t.width}function getOriginalHeight(a){var t=new Image();t.src=a;return t.height}function watermarkPosition(){var a=$('#example_cell').height();var b=$('#example_cell').width();var c=Math.min(b,getOriginalWidth($('#watermark_example').attr('src')));var d=Math.min(a,getOriginalHeight($('#watermark_example').attr('src')));var e=$('#position_tr input[type=radio]:checked').val();if('coverimage'==e){var f=b/a;var g=c/d;if(f>g){c=Math.round(a/d*c);d=a}else{d=Math.round(b/c*d);c=b}}var h=0;var i=0;var j=Math.round(a/2);var k=Math.round(b/2);switch(e){case'topleft':break;case'topright':i=b-c;break;case'middleleft':h=j-Math.round(d/2);break;case'coverimage':case'centered':h=j-Math.round(d/2);i=k-Math.round(c/2);break;case'middleright':h=j-Math.round(d/2);i=b-c;break;case'bottomleft':h=a-d;break;case'bottomright':h=a-d;i=b-c;break}var l=$('#watermark_transparency').val()/100;$('#watermark_example').css('width',c+'px').css('height',d+'px');$('#watermark_example').css('top',h+'px').css('left',i+'px');$('#watermark_example').css('opacity',l)}function watermarkDrawExample(){getGoogleChart()}function watermarkFixed(){var a=Math.round($(window).height()/2)-Math.round($('#example_cell').height()/2);var b=Math.round($(window).width()/2)-Math.round($('#example_cell').width()/2);$('#example_cell').css('top',a).css('left',b)}$(document).ready(function(){if(!$('#example_cell').length)return;watermarkFixed();watermarkDrawExample();$('#lgw-enable').change(function(){if($('#lgw-enable').is(':checked')){$('#lgw-settings').show()}else $('#lgw-settings').hide()});$('#watermark_type').change(function(){showTR='#'+$(this).val();$('.xtra_options').hide(0,function(){$(showTR).show(0)});if('d_fnote'==$(this).val())$('#font_size_p').hide();else $('#font_size_p').show();watermarkDrawExample()});$('#preview_button').click(function(e){$('#example_cell').show();(e).preventDefault();return false});$('#example_cell').click(function(){$('#example_cell').hide()});$('#position_tr input[type=radio]').change(function(){$('#position_tr input[type=radio]').parent().removeClass('selected');$('#watermark_position').removeClass('selected');if($(this).val()!='coverimage'){if($(this).is(':checked'))$(this).parent().addClass('selected');else $(this).parent().removeClass('selected')}else{if($(this).is(':checked'))$('#watermark_position').addClass('selected')}watermarkPosition()});$('#watermark_textsize').change(function(){exampleLoaded=false;watermarkDrawExample()});$('#textcolorpicker').farbtastic('#watermark_color');$('#outlinecolorpicker').farbtastic('#watermark_outlinecolor');$('#bordercolorpicker').farbtastic('#watermark_bordercolor');$('#watermark_color').click(function(e){$('#textcolorpicker').show()});$('#watermark_outlinecolor').click(function(e){$('#outlinecolorpicker').show()});$('#watermark_bordercolor').click(function(e){$('#bordercolorpicker').show()});$('#watermark_color').keyup(function(){var a=$('#watermark_color').val(),b=a;a=a.replace(/[^a-fA-F0-9]/,'');if('#'+a!==b)$('#watermark_color').val(a);if(a.length===3||a.length===6)textColor('#'+a)});$('#watermark_outlinecolor').keyup(function(){var a=$('#watermark_outlinecolor').val(),b=a;a=a.replace(/[^a-fA-F0-9]/,'');if('#'+a!==b)$('#watermark_outlinecolor').val(a);if(a.length===3||a.length===6)outlineColor('#'+a)});$('#watermark_bordercolor').keyup(function(){var a=$('#watermark_bordercolor').val(),b=a;a=a.replace(/[^a-fA-F0-9]/,'');if('#'+a!==b)$('#watermark_bordercolor').val(a);if(a.length===3||a.length===6)borderColor('#'+a)});$(document).mouseup(function(e){$('#textcolorpicker').hide();$('#outlinecolorpicker').hide();$('#bordercolorpicker').hide();$('#example_cell').hide();watermarkDrawExample()});$('#watermark_textalignment').change(function(){watermarkDrawExample()});$('#watermark_textweight').change(function(){watermarkDrawExample()});$('#watermark_transparency').change(function(){watermarkPosition()});$('.watermarker').click(function(){return false})})})(jQuery)