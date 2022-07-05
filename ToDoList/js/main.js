
const Main = {
    iniciar: function(){
       this.selecionarDivs()
       this.bindEventos()
    },

    selecionarDivs: function (){
        this.$removeButton = document.querySelectorAll('.remove')
        this.$checkButton = document.querySelectorAll('.check')  
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
    },

    bindEventos: function(){
        const self = this

        this.$checkButton.forEach(function(button){
            button.onclick = self.Eventos.checkbutton_click
        })  
        
        this.$inputTask.onkeypress = self.Eventos.inputTask_keypress.bind(this)
        this.$removeButton.forEach(function(button){
            button.onclick = self.Eventos.removeButton_click
        })
    },

    Eventos: {
        checkbutton_click: function(e){
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')

            if (!isDone){
                li.classList.add('done')
                return
            }

            li.classList.remove('done')
        },

        inputTask_keypress: function(e){
            const key = e.key
            const value = e.target.value

            if(key === 'Enter'){
                this.$list.innerHTML += `
                <li>
                    <div class="check"></div>
                    <label class="task">
                        ${value}
                    </label>
                    <button class="remove"></button>
                </li>
                `

                e.target.value = ''
                this.iniciar()
                this.selecionarDivs()
            }
        },

        removeButton_click: function(e){
            let li = e.target.parentElement

            li.classList.add('removed')
            
            setTimeout(function(){
                li.classList.add('hidden')
            }, 300)
        }
    }
}

Main.iniciar()