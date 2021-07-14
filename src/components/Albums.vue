<template>
        <div class="albums-inner-container">
            <div class="sfondo-album">
                <img :src="poster" :alt="'album ${title} of ${author}'">
                <div class="title">{{title}}</div>
                <div class="author">{{author}}</div> 
                <div class="year">{{year}}</div> 
            </div>
        </div>
</template>

<script>

export default {
  name: "Albums",
  props: {
      poster: String,
      title: String,
      author: String,
      year: String,
  }

};

</script>

<style lang="scss" scoped>

    .albums-inner-container {
        width: calc(100% / 5 - 10px);
        margin-right: 10px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 40px;

        .sfondo-album{
            background-color: rgb(46, 58, 70);
            width: 160px;
            height: 280px;
        
            img {
                width: 130px;
                padding-top: 15px;
                padding-bottom: 10px;
            }

            .title {
                color: white;
                font-size: 18px;
                padding-bottom: 15px;
            }

            .author, .year {
                color: rgb(128, 128, 120);
            }
        }
    }

        
</style>
