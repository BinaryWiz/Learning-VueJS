<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote'">Quote</button>
                <button @click="selectedComponent = 'app-author'">Author</button>
                <button @click="selectedComponent = 'app-new'">New</button>
               <!-- <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p>Here's the quote</p>
               </app-quote> -->
               <keep-alive>
                    <component :is="selectedComponent">
                            <h2 slot="title">{{ quoteTitle }}</h2>
                            <p>Here's the quote</p>
                    </component>
               </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'

    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'app-quote'
            }
        },
        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New
        }
    }
</script>

<style>
</style>
