export default {
  menubar: false,
  contextmenu: "link image imagetools table spellchecker",
  plugins: "image link media mediaembed",
  toolbar:
    "formatselect | bold italic strikethrough forecolor backcolor permanentpen formatpainter | link image media pageembed | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent | removeformat",
  file_picker_callback: function(callback, value, meta) {
    /* Provide file and text for the link dialog */
    if (meta.filetype === "file") {
      callback("https://www.google.com/logos/google.jpg", { text: "My text" });
    }

    /* Provide image and alt text for the image dialog */
    if (meta.filetype === "image") {
      callback("https://www.google.com/logos/google.jpg", {
        alt: "My alt text"
      });
    }

    /* Provide alternative source and posted for the media dialog */
    if (meta.filetype === "media") {
      callback("movie.mp4", {
        source2: "alt.ogg",
        poster: "https://www.google.com/logos/google.jpg"
      });
    }
  },
  images_upload_url: "postAcceptor.php",
  height: "100%"
};
