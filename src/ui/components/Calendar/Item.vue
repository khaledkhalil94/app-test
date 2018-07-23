<template>
    <div class="calendar-item">
        <div class="card-title">{{item.day}}</div>
        <div class="card-content">
            <h1 class="date">{{item.date}}</h1>
            <div class="card-action">
                <span class="tickets-left">{{item.ticketsLeft}} left</span>
                <div class="action-button book" v-if="item.ticketsLeft > 0">
                    BOOK
                </div>
                <div class="action-button sold" v-else>SOLD</div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'Calendar-Item',
    components: {},
    props: ['item'],
  };
</script>

<style lang="sass">
    .calendar-item
        margin: 0 1px
        padding-bottom: 19px
        .card-title
            text-align: center
            padding: 10px 0
        .card-content
            background-color: white
            width: 180px
            padding: 20px
            .date
                color: black
                margin-bottom: 50px
            .card-action .action-button
                padding: 10px
                border: 1px solid black
                &.book
                    cursor: pointer
                    color: white
                    background-color: black
        .tickets-left
            color: grey
            font-size: 10px
</style>
