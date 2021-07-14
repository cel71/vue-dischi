<template>
    <div class="sfondo">
        <div class="immagine">
            <img src="../assets/spotify-logo.png" alt="">
        </div>
        <div class=""></div>
    </div>
</template>

<script>

export default {
  name: "Header",

};

</script>

<style lang="scss" scoped>

    .sfondo {
        height: 80px;
        background-color: rgb(46, 58, 70);
        display: flex;
        align-items: center;

        img {
            width: 70px;
        }
    }

</style>
