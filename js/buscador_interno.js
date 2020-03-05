
  function search() {
      var input, filter, ul, li, i, h5, p;
      input = document.getElementById("input");
      filter = input.value.toUpperCase();
      ul = document.getElementById("ul");
      li = ul.getElementsByTagName("li");
      console.log(li[0])
      for (i = 0; i < li.length; i++) {
          h5 = li[i].getElementsByTagName("h5")[0]     
          if (h5.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "block";
          } else {
              li[i].style.display = "none";
          }
      }
  }

