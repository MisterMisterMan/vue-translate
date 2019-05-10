<template>
    <table>
        <thead>
        <tr>
            <td>Cyrillic Alphabet</td>
            <td>Latin alphabet</td>
            <td>IPA</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="letter of alphabet" :key="letter[2]">
            <td>{{letter[0] + ' ' + letter[1]}}</td>
            <td>{{letter[2] + ' ' + letter[3]}}</td>
            <td>{{letter[4]}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import alphabet from "../util/alphabet";

    export default {
        data: () => ({
            alphabet: alphabet.ALPHABET
        })
    }
</script>

<style scoped>

    table {
        margin: auto;
    }
</style>
