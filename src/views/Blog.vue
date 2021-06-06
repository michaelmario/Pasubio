<template >
  <div id="colorlib-page">
    <section class="ftco-section ftco-no-pt ftco-no-pb">     
        <div class="row d-flex">
          <div class="col-xl-8  px-md-5">
            <div class="blog-card-wrap">
              <div class="blog-cards container">
                <div class="toggle-edit">
                  <span>Toggle Editing Post</span>
                  <input type="checkbox" v-model="editpost" />
                </div>
                <div class="userAdminContainer" v-if="editpost">
                <div v-for="blog in blogPosts" :key="blog.id">
                  <div class="blog-card" :id="blog.id">
                    <div v-show="editpost" class="icons">
                      <router-link to="/edit" exact>
                      <div  class="icon">
                        <Edit class="edit" />
                      </div>
                      </router-link>
                      <div @click="deletePost" class="icon">
                        <Delete class="delete" />
                      </div>
                    </div>
                    <img :src="blog.blogCoverPhoto" alt="" />
                    <div class="info">
                      <h4>{{ blog.blogTitle}}</h4>
                      <h6>
                        Posted on:
                        {{ currentDateTime(blog.blogDate) }}                        
                      </h6>
                      <p>{{blog.blogContent}}</p>                  
                    </div>
                  </div>                  
                </div> 
                </div>              
              </div>              
            </div>             
          </div>
          <div
            class="
              col-xl-4
              sidebar
              ftco-animate
              bg-light
              pt-2
              fadeInUp
              ftco-animated
            "
          >
            <div class="sidebar-box pt-md-4">
              <form action="#" class="search-form">
                <div class="form-group">
                  <span class="icon icon-search"></span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type a keyword and hit enter"
                  />
                </div>
              </form>
            </div>
            <div class="sidebar-box ftco-animate fadeInUp ftco-animated">
              <h3 class="sidebar-heading">Categories</h3>
              <ul class="categories">
                <li>
                  <a href="#">Fashion <span>(6)</span></a>
                  </li>                
              </ul>
            </div>
            <div class="sidebar-box ftco-animate fadeInUp ftco-animated">
              <h3 class="sidebar-heading">Popular Articles</h3>
              <div class="block-21 mb-4 d-flex">
                
                <div class="text"></div>
              </div>
             
            </div>

            <div
              class="sidebar-box subs-wrap img py-4"
              style="
                background-image: url(images/xbg_1.jpg.pagespeed.ic.fkgeUtddhh.webp);
              "
            >
              <div class="overlay"></div>
              <h3 class="mb-2 sidebar-heading">Newsletter</h3>
              <h5 class="mb-4">
                 Subscribe for keeping up to date on the new arrivals. 
              </h5>
              <form action="#" class="subscribe-form">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Address"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    class="mt-2 btn btn-dark submit"
                  />
                </div>
              </form>
            </div>
            <div class="sidebar-box ftco-animate fadeInUp ftco-animated">
              <h3 class="sidebar-heading">Archives</h3>
              <ul class="categories">
                <li>
                  <a href="#">Decob14 2018 <span>(10)</span></a>
                </li>
              </ul>
              <div
                class="fb-page"
                data-href="https://www.facebook.com/profile.php?id=100068592489163"
                data-width="380"
                data-hide-cover="false"
                data-show-facepile="false"
              ></div>
               <span>
            <a href="/connexion"  type="submit" class="w3-bar-item w3-button">
            <i class="fa fa-sign-in-alt"></i> CONNEXION</a>
          </span>
            </div>            
          </div>
        </div>     
    </section>
  </div>
</template>
<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";
import moment from 'moment';
import { db } from "../firebase";
export default {
  name: "Blog",
  components: { Arrow ,Edit, Delete },
  data() {
    return {
      blogPosts: [],
      editPost:false,
    };
  },

  methods: {
   currentDateTime() {
      return moment().format('MMMM Do YYYY, h:mm:ss a')
    },
    editBlog(){
      window.location = "/edit";
    },
    getPosts() {
      let vm = this;
      db.collection("blogPosts")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            vm.blogPosts.push({
              id: doc.id,
              blogTitle: doc.data().blogTitle,
              blogCoverPhoto: doc.data().blogCoverPhoto,
              blogCoverPhotoName: doc.data().blogCoverPhotoName,
              blogDate: doc.data().blogDate,
              blogContent: doc.data().blogContent,
            });            
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    },
   async deletePost(e) {
     if(confirm ('Are you sure?')) {
      let targetId = e.target.parentNode.parentNode.id;
        let collectionData = db.collection('blogPosts');
     await collectionData.get()
       .then((querySnapshot) => {
         let dataArray = querySnapshot.docs;
         dataArray.forEach((data)=>{
           let dataId = data.id;
           if(dataId === targetId){
             collectionData.doc(targetId).delete(); 
                       
           }
         })
          })
          .catch((error)=>{
           console.log(error)
          })      
          } 
          setTimeout(() => {
            this.$router.go();
          }, 1000);
           },
      
  },
  created() {
    this.getPosts();
    if(this.editPost === false){
      document.querySelector('.userAdminContainer').style.display = "none";
    }else{
      document.querySelector('.userAdminContainer').style.display = "block";
    }

  },
  
 computed:{}
 
}
</script>
<style lang="scss" scoped>
#colorlib-page {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;

      &:hover {
        background-color: #303030;

        .edit,
        .delete {
          path {
            fill: #fff;
          }
        }
      }

      &:nth-child(1) {
        margin-right: 8px;
      }

      .edit,
      .delete {
        pointer-events: none;
        height: 15px;
        width: auto;
      }
    }
  }

  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    max-height: 200px;
    object-fit: cover;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;

    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }

    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: 0.5s ease-in all;

      &:hover {
        color: rgba(48, 48, 48, 0.8);
      }

      .arrow {
        width: 10px;
      }
    }
  }
}
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      /*flex-direction: row;*/
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;

    span {
      margin-right: 16px;
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>
