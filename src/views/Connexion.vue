<template>
  <div class="container firstPaint w3-opacity-min">
    <div  id="login" data-aos="fade-down-right">
      <div class="col-md-6 text-center" id="loginImg">
        <div class="card ">
          <div class="bg-login-image" >
           <h2 class="text-white">Pasibuo</h2>
        </div>
      </div>
      </div>

      <div class="col-md-6 text-center">
        <div class="card mb-4">
         <div class="w3-bar w3-blue d-flex">
            <button class="w3-bar-item w3-button" type='submit'  @click="openSec()">SE CONNECTER</button>
            <button class="w3-bar-item w3-button" type='submit' @click="openSec()">INFORMATION SUR LA SÉCURITÉ</button>
           </div>
           <!-- Contact -->
          <div class="container connecter " >
            <h1 class="w3-xlarge w3-text-green">
              <b>SE CONNECTER.</b>
            </h1>
            <hr style="width:50px;border:5px solid green" class="" />
            
            <form action="" target="_blank">
              <div class="w3-section w3-padding">
                 <div id="firebaseui-auth-container"></div>
                 </div>
            </form>
          </div>
            <div class="w3-container w3-white" id="signin" :class="{ active: active}">
            <h1 class="w3-xlarge w3-text-green">
              <b>SÉCURITÉ.</b>
            </h1>
            <hr style="width:50px;border:5px solid green" class="w3-round" />
             <div class="w3-section w3-padding">
               <p>Google Sign-In est un système d'authentification sécurisé qui réduit la charge de connexion pour les utilisateurs, en leur permettant de se connecter avec leur compte Google, le même compte qu'ils utilisent déjà avec Gmail, Play et d'autres services Google.</p>
              <p>N'oubliez pas, <span class="w3-text-green">Mauricode-Academy</span> n'a pas réellement votre mot de passe. nous n'avons en réalité rien d'autre qu'un jeton qui nous permette de confirmer votre identité avec Google ou Facebook. Si nous sommes piratés, il n'y a pas de compte réel pour que vos informations soient perdues</p>
              </div>        
          </div>        
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import {fA} from '../firebase';
import * as firebaseui from 'firebaseui'
export default {
  name: 'Connexion',
  data(){
    return{
      active:false
    }
    },
  mounted(){
    var uiConfig = {
      signInSuccessUrl: '/blog',
      signInOptions: [
        fA.GoogleAuthProvider.PROVIDER_ID,
         {
            provider: fA.FacebookAuthProvider.PROVIDER_ID,
            scopes: [
              'public_profile',
              'email',
              'user_likes',
              'user_friends'
            ],
            customParameters: {
              // Forces password re-entry.
              auth_type: 'reauthenticate'
            }
         },
         fA.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
          fA.EmailAuthProvider.PROVIDER_ID // Other providers don't need to be given as object
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '/termsofservice',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('/privacypolicy');
    },
      };
    var ui = new firebaseui.auth.AuthUI(fA());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
    methods:{
     openSec(){
        this.active = !this.active         
     }
   },
}



</script>
<style  scoped>
/*.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}
.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}
.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}
.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}*/
.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}
.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}
.w3-bar .w3-button{white-space:normal}
.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}
.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}
.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}
#login {
  width: 80%;
  margin: 10% auto;
  display: flex;
  flex-direction: row;
}
.connecter{
  height:477px;
  width:100%;
  background-color:rgb(70, 66, 66);
}
.bg-login-image{
  background:url(https://source.unsplash.com/collection/190727/500x700);
  background-position:center;
  background-size:cover;
  object-fit: contain;
  height:477px;  
  }

#signin{
  display:none;
  height:477px;
  margin-right: 18px;
 }
#contact{
   height:477px;
   background:rgb(54, 53, 53); 
   color:#fff;  
}
#contact.active{
    display:block;
     position: absolute; 
    z-index:4; 
   
}
/*#signin.active{
    display:block;
     position: absolute; 
    z-index:4;
  
   
}*/
li.firebaseui-list-item{
  list-style: none !important;
}
@media (max-width: 768px) {
  #login {
    width: 100%;
    margin: 20px auto;
     flex-direction: column;
  }
  .firstPaint {
    height: 770px;
  }
  #loginImg{
    display:none;
  }
  #contact{
   height:auto;
}
#signin{
  height:689px;
}
}
</style>