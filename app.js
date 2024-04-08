const { createApp } = Vue

createApp({
    data() {
        return {
            newMail: '',
            randomMails: [],
        }
    },

    methods: {
        fetchMail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((mail) => {
                        this.newMail = mail.data.response
                        this.randomMails.push(this.newMail)
                    })
            }    
        }
    },

    created() {
        this.fetchMail()
        console.log(this.randomMails)
    }

}).mount('#app')