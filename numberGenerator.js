var	wholenumber	= 49
var	select	= 6

function shuffle(){
		document.open("text/html")
		document.write("<P>Sie benötigen für diese Funktion einen aktuelleren Browser.</P>")
		document.close()
}

function comparison(x, y){
		if(x < y)
			return -1
		if(x > y)
			return 1
		return 0
}

function shuffle(reihen){
		var	globe = new Array()
		var	number = new Array()
		var	width = Math.floor(100 / select)
		var	i, j

		function generate(){
				function deselect(pos){
					var	k
					for(k = pos + 1; k < globe.length; k++)
					globe[k - 1]	= globe[k]
				}

			var	nummer	=	0
			for(i = 1; i < wholenumber + 1; i++)
				globe[i]	= i
			for(i = 0; i < select; i++){
				nummer	= Math.floor(Math.random() * (wholenumber - i) + 1)
				number[i]	= globe[nummer]
				if(globe.splice)
					globe.splice(nummer, 1)
				else
				deselect(nummer)
			}

		number.sort(comparison)
		}

		document.open("text/html")
		document.writeln("<DIV ALIGN=CENTER>")
		document.writeln("<TABLE BORDER=0 CELLSPACING=4 CELLPADDING=8 BGCOLOR=\"#CCCCCC\">")
		for(j = 0; j < (reihen ? reihen : 1); j++){
			generate()
				document.writeln("<TR ALIGN=CENTER VALIGN=CENTER>")
			for(i = 0; i < select; i++)
				document.writeln("<TD WIDTH=\"" + String(width) + "%\">" + String(number[i]).fontsize(6).bold().fixed() + "</TD>")
				document.writeln("</TR>")
		}
		document.writeln("</TABLE>")
		document.writeln("</DIV>")
		document.close()
}

shuffle(Number(location.search.substring(1)))
