<template>
    <div class="hello">
        <h1>{{ word }}</h1>
        <h3>{{latinWord}}</h3>
        <h3>{{cyrillicWord}}</h3>
        <h3>Alphabet</h3>
        <alphabet></alphabet>
        <h3>Noun</h3>
        <ul>
            <li></li>
        </ul>
        <h3>Adjective</h3>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
    import Alphabet from "./Alphabet";
    import alphabet from "../util/alphabet";
    export default {
        components: {Alphabet},
        props: {
            word: String
        },
        computed: {
            latinWord () {
                return alphabet.toLatin(this.word);
            },
            cyrillicWord () {
                return alphabet.toCyrillic(this.word);
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

