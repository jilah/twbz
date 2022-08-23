var loadFile = function(event) {
    var output = document.getElementById('avatar');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
    URL.revokeObjectURL(output.src)
    }
  };

  var loadTemplate = function(event) {
    var output = document.getElementById('bingkai');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
    URL.revokeObjectURL(output.src)
    }
  };

  function gen() {
      alert("Click OK to continue...");
      // Mensetting Variabel
        var img1 = document.getElementById('avatar');
        console.log(img1);
        var img2 = document.getElementById('bingkai');
        console.log(img2);
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        var width = img2.width;
        var height = img2.height;
        canvas.width = width;
        canvas.height = height;
        // Fungsi untuk men-draw gambar
        context.drawImage(img1, 0, 1, width, height);
        var image1 = context.getImageData(0, 0, width, height);
        var imageData1 = image1.data;
        context.drawImage(img2, 0, 0, width, height);
        var image2 = context.getImageData(0, 0, width, height);
        var imageData2 = image2.data;
  }

  function download(canvas, filename) {
    /// create an "off-screen" anchor tag
    var lnk = document.createElement('a'), e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL("image/png;base64");

    /// create a "fake" click-event to trigger the download
        if (document.createEvent) {
            e = document.createEvent("MouseEvents");
            e.initMouseEvent("click", true, true, window,
                            0, 0, 0, 0, 0, false, false, false,
                            false, 0, null);

            lnk.dispatchEvent(e);
        } else if (lnk.fireEvent) {
            lnk.fireEvent("onclick");
        }
    }

    var dwn = document.getElementById('btndownload');
        dwn.onclick = function(){
        download(canvas, 'mer.cyclic.app.png');
    };
