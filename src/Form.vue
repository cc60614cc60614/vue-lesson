<template>
  <div>
    <h1>{{ text }}</h1>
    <input type="text" v-model="text"/>

    <h1>{{ checked }}</h1>
    <input type="checkbox" v-model="checked"/>

    <h1>{{ time }}</h1>
    <input type="checkbox" value="Am" v-model="time"/>
    <input type="checkbox" value="Pm" v-model="time"/>

    <h1>{{ gender }}</h1>
    <input type="radio" value="male" v-model="gender"/>
    <input type="radio" value="female" v-model="gender"/>

    <h1>{{ char }}</h1>
    <select v-model="char">
        <option value="value A">A</option>
        <option value="value B">B</option>
        <option value="value C">C</option>
        <option value="value D">D</option>
    </select>

    <h1>{{ chars }}</h1>
    <select v-model="chars" multiple>
        <option value="value A">A</option>
        <option value="value B">B</option>
        <option value="value C">C</option>
        <option value="value D">D</option>
    </select>
  </div>
</template>

<script>
export default {
    data:() =>({
        text: "",
        checked: false,
        time: [],
        gender: "male",
        char: "",
        chars: [],
    })
}
</script>

<style>

</style>