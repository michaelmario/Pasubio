<template>
<footer class="site-footer">
<div class="w3-container w3-center">
        <div class="w3-padding-top">
            <ul class="copyList"  data-aos="fade-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
                <li>Copyright © by
                    <a href="#" target="_blank" rel="noopener">Achille Mario | 2021</a></li>
                <li>
                    <a href="https://jigsaw.w3.org/css-validator/check/referer" target="_blank" rel="noopener">
                        <img style="border:0;width:88px;height:27px" src="https://firebasestorage.googleapis.com/v0/b/mauricodeacademy.appspot.com/o/images%2Fw3-cssRight.webp?alt=media&token=04c985a6-233c-4322-ad43-e5d973a57b85" alt="CSS Valide !" />
                    </a>

                </li>            
            </ul>
        </div>

    </div>

</footer>
</template>

<script>
// import SocialSharing from 'vue-social-sharing';
export default {
    name: "Footer",
    components: {
      //   SocialSharing
    }
};
</script>

<style scoped>
.site-footer {
   background-color:#071c72;
    color: #fff;
}
.devise {
    padding-left: 15px;
}
.space {
    height: 150px;
}
.footerNav ul li {
    list-style: none;
}
.footerNav>ul>li>a:hover {
    color: orange;
}
.copyList>li {
    list-style: none;
    margin-top: 10px;
}
.copyList>li a {
    text-decoration: none;
    color: rgb(255, 0, 76);
}
</style>