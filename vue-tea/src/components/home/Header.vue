<template>
  <header>
      <h1>
          <img src="@/assets/images/logo.png" alt="">

      </h1>
          <div class='search'>
          <i class='iconfont icon-Magnifier'></i>
          <span>搜您喜欢的</span>
          </div>
      <div class='kefu'>
          <i class='iconfont icon-kefu'></i>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header{
    display:flex;
    justify-content:space-around;
    align-items:center;
    width: 100%;
    height:1.6rem;
    background-color:#b0352f ;
}
header h1{
   padding:0 0.266666rem ;
   width: 3.2rem;
   height:1.333333rem ;
}
.search{
    display:flex;
    align-items:center;
    width: 5rem;
    height: 0.8rem;
    background-color: #FFFFFF;
    border-radius: .32rem;
}
.search i{
    padding: 0 0.16rem;
    color:#ccc
}
header h1 img{
    width: 100%;
    height: 100%;
}
.seach i{
    padding:0 0.16rem;

    color:#ccc;
}
.search span{
    font-size:0.373333rem;
    color:#ccc;
}
.kefu i{
	font-size:0.96rem;
	color:#fff;
}
</style>