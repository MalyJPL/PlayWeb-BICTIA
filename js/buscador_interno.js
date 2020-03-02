
  function search() {
      var input, filter, ul, li, i, h5, p;
      input = document.getElementById("input");
      filter = input.value.toUpperCase();
      ul = document.getElementById("ul");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          h5 = li[i].getElementsByTagName("h5")[0];
          console.log(h5 + "--" + filter)
          if (h5.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "block";
          } else {
              li[i].style.display = "none";
          }
      }
  }

