<template>
  <div class="contact">
    <hr />
    <b-row>
      <b-col class="col-sm-12 col-md-6 mb-3">
        <b-card>
          <div class="d-flex">
            <b-avatar
              src="/images/marielouise.jpg"
              size="6rem"
              variant="info"
              class="ml-3"
            ></b-avatar>
            <h3 class="mb-2 pt-4 pl-4">Louise Marie Cotte</h3>
          </div>
          <b-card-text>
            Thank you for your request, it is a pleasure for me to help you
          </b-card-text>
          <b-card-text>
            I am at your disposition at any time, you will get your answer back
            within 24 hr
          </b-card-text>
          <b-card-text>
            <div class="col-md-12">
              <p><strong>Email:</strong>achille.louisemarie64@gmail.com</p>
              <p><strong>Mobile:</strong>+230-58 65 34 56</p>
              <p>Business Registration number : 11800916</p>
            </div>
          </b-card-text>

          <b-button
            href="https://www.linkedin.com/in/louise-marie-cotte-201419213/"
            target="_blank"
            variant="dark"
            >Linkedin Page</b-button
          >
        </b-card>
      </b-col>
      <div class="col-sm-12 col-md-6 mb-3">
        <div class="container-fluid h-100 bg-light text-dark">
          <div class="row justify-content-center align-items-center">
            <h1>Message</h1>
          </div>
          <hr />
          <div class="row justify-content-center align-items-center">
            <form>
              <div class="form-group">
                <label for="inputEmail4"></label>
                <input
                  type="email"
                  class="form-control mb-2"
                  id="inputEmail4"
                  placeholder="Email"
                  v-model="data.email"
                  :onkeyup="cleanInput()"
                />
              </div>
              <div class="form-group">
                <label for="inputDate"></label>
                <input
                  type="date"
                  class="form-control mb-2"
                  id="inputDate"
                  placeholder=""
                  v-model="data.date"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress"></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Adress"
                  v-model="data.adress"
                />
              </div>
              <div class="form-group">
                <label for="ControlTextarea" class="text-dark mt-2 mb-2"
                  >Message</label
                >
                <textarea
                  class="form-control"
                  id="ControlTextarea"
                  rows="4"
                  v-model="data.message"
                ></textarea>
              </div>
              <div class="form-group">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 mt-2 mb-2">
                      <div
                        class="bg-success text-white p-3"
                        v-if="autput === true"
                      >
                        <span class="text-white">{{ autput }}</span>
                      </div>
                      <div v-else class="p-3">
                        <span class="text-dark">{{ autput }}</span>
                      </div>
                    </div>
                    <div class="col mt-2 mb-2">
                      <button class="col-6 btn btn-secondary btn-sm float-left" @click="resetInput">
                        Reset
                      </button>
                    </div>
                    <div class="col mt-2 mb-2">
                      <button
                        class="col-6 btn btn-dark btn-sm float-right"
                        @click="onSubmit"
                        :class="{ allow: allow }"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </b-row>
  </div>
</template>
<script>
import { fA, db } from "../firebase";
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
  name: "Contact",
  data() {
    return {
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      data: {},
      autput: null,
      allow: false,
    };
  },
  methods: {
    cleanInput() {
      if (this.data.email) {
        let notAllow = /[< $ >``{}''""^ ]/gi;
        if (this.reg.test(this.data.email)) {
          this.autput = "Email is well-formatted you can proceed";
          this.allow = true;
        } else if (this.data.email.search(notAllow) > -1) {
          this.data.email = this.data.email.replace(notAllow, "");
          this.autput = "Special characters are prohibited!";
          this.allow = false;
        } else {
          this.autput = "The Email is not well formatted";
          this.allow = false;
        }
      }
    },
    resetInput(evt){
       evt.preventDefault();
     this.data.email = null ;
        this.data.date = null ;
        this.data.adress = null;
        this.data.message = null;
          this.autput = null;
    },
    onSubmit(evt) {
      evt.preventDefault();
      if (
        this.data.email == null ||
        this.data.date == null ||
        this.data.adress == null ||
        this.data.message == null
      ) {
        this.autput = "Fill all camps, please";
      } else if (!this.reg.test(this.data.email)) {
        this.autput = "The email is not format corectly";
      } else {
        fA()
          .signInAnonymously()
          .then(() => {
            let neweMassage = {
              email: this.data.email,
              date: this.data.date,
              adress: this.data.adress,
              message: this.data.message,
            };
            db.collection("message")
              .add(neweMassage)
              .then(() => {
                this.data.email = null;
                this.data.name = null;
                this.data.message = null;
                this.autput = "Your message has been sent";
                Toast.fire({
                  icon: "success",
                  title: "Your message has been sent",
                });
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    onReset(evt) {
      evt.preventDefault();
      (this.email = ""),
        (this.date = ""),
        (this.adress = ""),
        (this.message = "");
    },
  },
};
</script>
<style lang="css">
.contact {
  min-height: 600px;
  height: auto;
  width: 100%;
}
</style>