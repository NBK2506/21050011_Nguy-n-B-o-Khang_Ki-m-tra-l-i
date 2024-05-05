var images = document.querySelectorAll(".image");
var prev = document.querySelector(".control_prev");
var next = document.querySelector(".control_next");
var close = document.querySelector(".close");
var galleryImg = document.querySelector(".gallery_inner"); 
var gallery = document.querySelector(".gallery"); 
var currentIndex = 0;

function showGallery() {
  // Kiểm tra nếu currentIndex là 0 để ẩn nút prev
  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }

  // Kiểm tra nếu currentIndex là images.length - 1 để ẩn nút next
  if (currentIndex == images.length - 1) { 
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }

  // Xác định hình ảnh được chọn và hiển thị nó trong gallery
  var selectedImage = images[currentIndex];
  galleryImg.src = selectedImage.src;
  gallery.classList.add('show');
}

// Gắn sự kiện click cho từng hình ảnh
images.forEach((item, index) => {
  item.addEventListener("click", function() {
    currentIndex = index;
    showGallery();
  });
});

// Gắn sự kiện click cho nút prev
prev.addEventListener("click", function() {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});

// Gắn sự kiện click cho nút next
next.addEventListener("click", function() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
});

// Gắn sự kiện click cho nút close
close.addEventListener("click", function() {
  gallery.classList.remove('show');
});

// Gắn sự kiện keydown để đóng gallery khi nhấn phím Escape
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 27) {
    gallery.classList.remove('show');
  }
});
