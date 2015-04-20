var a = document.getElementsByClassName('post-body');
  for(var i=0;i<a.length;i++){
                        a[i].innerHTML = a[i].innerHTML.replace(/ :\)/gi, "<img src='http://1.bp.blogspot.com/-2Z7Cwe04x-Q/UH9THzWWJII/AAAAAAAACtA/ChwawyzYsDI/s1600/smile1.gif' alt='smile' class='ki-smiley'/>");
                        a[i].innerHTML = a[i].innerHTML.replace(/ :D/gi, "<img src='http://3.bp.blogspot.com/-WeTjMT8JDhg/UKhVHlZ88II/AAAAAAAADPI/b1gpiAvIkCc/s1600/icon_smile.gif' alt='' class='ki-smiley'/>");
                        a[i].innerHTML = a[i].innerHTML.replace(/:wee/gi, "<img src='http://2.bp.blogspot.com/-bs2e9gRj748/UKhVNKLs2YI/AAAAAAAADQA/mF7lDNOChac/s1600/wee.gif' alt='' class='ki-smiley'/>");
                        a[i].innerHTML = a[i].innerHTML.replace(/:keren/gi, "<img src='http://2.bp.blogspot.com/-yElQmFAIiII/UKhVMcObcQI/AAAAAAAADP4/-qdEpW8zCmY/s1600/thumbsup.gif' alt='' class='ki-smiley'/>");
                        a[i].innerHTML = a[i].innerHTML.replace(/:hebat/gi, "<img src='http://4.bp.blogspot.com/-ip66eq3uRI8/UKhVF-QK8lI/AAAAAAAADO4/P0G-1PcWpQs/s1600/applause.gif' alt='smile' class='ki-smiley'/>");
						a[i].innerHTML = a[i].innerHTML.replace(/ :p/gi, "<img src='http://2.bp.blogspot.com/-bs2e9gRj748/UKhVNKLs2YI/AAAAAAAADQA/mF7lDNOChac/s1600/wee.gif' alt='smile' class='ki-smiley'/>");
}
