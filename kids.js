
$(document).ready(function(){
	   $("#b1").click(function(){
		    $("body").css("background-color","red");  
		    $("#div3").html(""); 
		    $("#div3").append('<p id="p1";width="40%">what is the name of this color?</p>');
		    $("#div3").append('<button id="div31";width:"30%">blue</button>');
		    $("#div3").append('<button id="div32">red</button>');
		    $("#div3").append('<button id="div33">yellow</button>');
		    $("#div31").click(function(){
		      	
	   	      alert("please try again the color is not blue");
	   }); 
		    $("#div32").click(function(){
		      $("#div3").html(""); 
	   	      alert("good job the color is red");
	   	      $("#div3").append('<span style="font-size:200px;">&#128512;</span>');
	   });
		    $("#div33").click(function(){

	   	      alert("please try again the color is not yellow");
	   });
		});
	   $("#b2").click(function(){
		    $("body").css("background-color","blue");
		    $("#div3").html("");
		    $("#div3").append('<p id="p1">what is the name of this color?</p>');
		    $("#div3").append('<button id="div34">purple</button>');
		    $("#div3").append('<button id="div35">red</button>');
		    $("#div3").append('<button id="div36">blue</button>');
		    $("#div34").click(function(){
	   	      alert("please try again the color is not purple");
	   });
		    $("#div35").click(function(){
	   	      alert("please try again the color is not red");
	   });
		    $("#div36").click(function(){
		      $("#div3").html("");	
	   	      alert("good job the color is blue");
	   	      $("#div3").append('<span style="font-size:200px;">&#128512;</span>');
	   });

		});
		
	   $("#b3").click(function(){
		    $("body").css("background-color","green");
		    $("#div3").html("");
		    $("#div3").append('<p id="p1">what is the name of this color?</p>');
		    $("#div3").append('<button id="div37">grey</button>');
		    $("#div3").append('<button id="div38">green</button>');
		    $("#div3").append('<button id="div39">yellow</button>');
		    $("#div37").click(function(){
	   	      alert("please try again the color is not grey");
	   });
		    $("#div38").click(function(){
		     $("#div3").html("");	
	   	      alert("good job the color is green");
	   	      $("#div3").append('<span style="font-size:200px;">&#128512;</span>');

	   });
		    $("#div39").click(function(){
	   	      alert("please try again the color is not yellow");
	   });
		});
	
	   $("#b4").click(function(){
		    $("body").css("background-color","orange");
		    $("#div3").html("");
		    $("#div3").append('<p id="p1">what is the name of this color?</p>');
		    $("#div3").append('<button id="div310">orange</button>');
		    $("#div3").append('<button id="div311">red</button>');
		    $("#div3").append('<button id="div312">yellow</button>');
		    $("#div310").click(function(){
		      $("#div3").html("");
	   	      alert("good job the color is orange");
	   	      $("#div3").append('<span style="font-size:200px;">&#128512;</span>');
	   });
		    $("#div311").click(function(){
	   	      alert("please try again the color is not red");
	   });
		    $("#div312").click(function(){
	   	      alert("please try again the color is not yellow");
	   });
		});
		
	   $("#b5").click(function(){
		    $("body").css("background-color","yellow");
		    $("#div3").html("");
		    $("#div3").append('<p id="p1">what is the name of this color?</p>');
		    $("#div3").append('<button id="div313">blue</button>');
		    $("#div3").append('<button id="div314">red</button>');
		    $("#div3").append('<button id="div315">yellow</button>');
		    $("#div313").click(function(){
	   	      alert("please try again the color is not blue");
	   });
		    $("#div314").click(function(){
	   	      alert("please try again the color is not red");
	   });
		    $("#div315").click(function(){
		     $("#div3").html("");
	   	      alert("good job the color is yellow");
	   	      $("#div3").append('<span style="font-size:200px;">&#128512;</span>');
	   });
		});
	
	   $("#b6").click(function(){
		    $("body").css("background-color","pink");
		    $("#div3").html("");
		    $("#div3").append('<p id="p1">what is the name of this color?</p>');
		    $("#div3").append('<button id="div316">yellow</button>');
		    $("#div3").append('<button id="div317">pink</button>');
		    $("#div3").append('<button id="div318">blue</button>');
		    $("#div316").click(function(){
	   	      alert("please try again the color is not yellow");
	   });
		    $("#div317").click(function(){
		      $("#div3").html("");	
	   	      alert("good job the color is pink");
	   	      $("#div3").append('<span style="font-size:200px;">&#128512;</span>');
	   });
		    $("#div318").click(function(){
	   	      alert("please try again the color is not blue");
	   });
		});
		
	   $("#b7").click(function(){
		    $("body").css("background-color","purple");
		    $("#div3").html("");
		    $("#div3").append('<p id="p1">what is the name of this color?</p>');
		    $("#div3").append('<button id="div319">blue</button>');
		    $("#div3").append('<button id="div320">red</button>');
		    $("#div3").append('<button id="div321">purple</button>');
		    $("#div319").click(function(){
	   	      alert("please try again the color is not blue");
	   });
		    $("#div320").click(function(){
	   	      alert("please try again the color is not red");
	   });
		    $("#div321").click(function(){
		    $("#div3").html("");
	   	      alert("good job the color is purple");
	   	      $("#div3").append('<span style="font-size:200px;">&#128512;</span>');
	   });
		});
	
	   $("#b8").click(function(){
		    $("body").css("background-color","lime");
		    $("#div3").html("");
		    $("#div3").append('<p id="p1">what is the name of this color?</p>');
		    $("#div3").append('<button id="div322">blue</button>');
		    $("#div3").append('<button id="div323">lime</button>');
		    $("#div3").append('<button id="div324">yellow</button>');
		    $("#div322").click(function(){
	   	      alert("please try again the color is not blue");
	   });
		    $("#div323").click(function(){
		    $("#div3").html("");
	   	      alert("good job the color is lime");
	   	      $("#div3").append('<span style="font-size:200px;">&#128512;</span>');
	   });
		    $("#div324").click(function(){
	   	      alert("please try again the color is not yellow");
	   });
		});
	    $("#b9").click(function(){
	    	$("body").css("background-color","violet");
	    	$("#div3").html("");
	    	$("#div3").append('<p id="p1">what is the name of this color?</p>');
	    	$("#div3").append('<button id="div325">black</button>');
	    	$("#div3").append('<button id="div326">red</button>');
	    	$("#div3").append('<button id="div327">violet</button>');
	    	$("#div325").click(function(){
	   	      alert("please try again the color is not black");
	   });
	    	$("#div326").click(function(){
	   	      alert("please try again the color is not red");
	   });
	    	$("#div327").click(function(){
	    	$("#div3").html("");
	   	      alert("good job the color is violet");
	   	      $("#div3").append('<span style="font-size:200px;">&#128512;</span>');
	   });
	    });
	   


		});

