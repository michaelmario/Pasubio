<template>
  <div class="container-fluid editContainer">
    <div class="row">
      <div class="col">
        <h2 class="text-center pt-3">Preview the blog</h2>
      </div>
      <div class="col">
        <div class="formContainer">
          <form enctype="multipart/form-data" @submit.prevent="sendPost">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputTitle"></label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  required
                  placeholder="Title of the blog"
                  v-model="title"
                />
              </div>
              <div class="form-group">
                <label for="inputDate"></label>
                <input
                  type="date"
                  class="form-control mb-2"
                  id="inputDate"
                  placeholder=""
                  v-model="date"
                />
              </div>
              <div class="form-group col-md-12">
                <label for="Textarea"></label>
                <textarea
                  class="form-control"
                  id="Textarea"
                  name="content"
                  rows="3"
                  required
                  placeholder="Blog content descrition of the blog "
                  v-model="content"
                ></textarea>
              </div>
            </div>
            <div class="form-group col-md-6 mt-3">
              <div class="form-group">
                <div class="custom-file">
                  <input
                    name="image"
                    type="file"
                    ref="image"
                    class="custom-file-input"
                    required
                    v-on:change="sendFile($event)"
                  />
                  <label class="custom-file-label" for="image"></label>
                </div>
              </div>
            </div>
            <div class="form-group col-md-12 mt-3 text-center">
              <button type="submit" class="btn btn-primary mt-3">Submit</button>
              <button
                type="button"
                class="mt-3 btn btn-dark"
                @click="initialiser"
              >
                initialiser
              </button>
            </div>
            <div v-if="messageError"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db, fS } from "../firebase";
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "center-end",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export default {
  name: "Edit",
  data() {
    return {
      image: "",
      title: "",
      content: "",    
      date: "",
      messageError: "",
      blogData: {},
    };
  },
  methods: {
   async sendPost() {
      const image = this.$refs.image.files[0];
      const imageName = image.name;
      this.blogData = {
        blogContent: this.content,
        blogCoverPhoto: "",
        blogCoverPhotoName: imageName,
        blogDate: this.date,
        blogTitle: this.title,
      };

      db.collection("blogPosts")
        .add(this.blogData)
        .then(function (blogRef) {
          let storageRef = fS.ref(`blogImages/${imageName}`);
          let uploadTask = storageRef.put(image);
          uploadTask.then(function (fileSnapshot) {
            // 3 - Generate a public URL for the file.
            return fileSnapshot.ref.getDownloadURL().then((url) => {
              // 4 - Update the chat message placeholder with the image's URL.
              return blogRef.update({
                blogCoverPhoto: url,
                storageUri: fileSnapshot.metadata.fullPath,
              });
            });
          })         
        })
        .catch(function (error) {
          console.error(
            "There was an error uploading a file to Cloud Storage:",
            error
          );
        });
            Toast.fire({
                  icon: "success",
                  title: "Your Blog has been sent",
                });
            this.title = "";
            this.content = "";
            this.date = " ";
            this.messageError = " ";
            image = ""
           
    },
    sendFile(event) {
      // Envois du Gif au parent pour traiter l'envois à l'API
      this.$data.image = event.target.files[0];
    },
    initialiser: function (e) {
      window.location.reload();
      this.messageError = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.editContainer {
  background-color: #fff;
  min-height: 700px;
}
.formContainer {
  padding-top: 20px;
}
.btn {
  margin-right: 10px !important;
}
</style>