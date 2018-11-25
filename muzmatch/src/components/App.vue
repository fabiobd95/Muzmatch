<template>
    <div id="app">

        <!-- Nav -->
        <section id="nav">
            <div class="row">  
                <div class="col-1">
                    <router-link to="/" class="nav-item" id="navImg"><img src="../assets/muzmatch.png"></router-link>
                </div>
                <div class="col-10"></div>
                <div class="col-1" id="contact">
                    <a class="nav-item" href='#'>
                        <h5>Contact</h5>
                    </a>
                </div>
            </div>
        </section>
        <router-view></router-view>
    </div>
</template>

<style type="text/css">

#nav {
    background-color: #e83e8c;
    overflow-x: hidden;
}

#navImg img {
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 10%;
    width: 50%;
}

#contact a h5{
    color: white;
    margin-top: 17%;
    text-align: right;
    margin-right: 10%;
}

#contact a:hover{
    text-decoration: none;
}


</style>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    }
  }
</script>