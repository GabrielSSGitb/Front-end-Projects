class action {
    constructor() {
        this.id = 1;
        this.arrayoftasks = [];
        this.editid = null;
    }
    save() {
       let task = this.lerdados(); 
    if(this.validacampo(task) == true) {
        if(this.editid == null) {
            this.adicionar(task)
        }else {
            this.atualizar(this.editid , task)
        }
       
       this.listatabela();
       this.cancel();
       
    }
    console.log(this.arrayoftasks)
    };
    adicionar(task) {
        task.time = parseInt(task.time)
       this.arrayoftasks.push(task);
       this.id++
    };
    atualizar(id, task) {
        for(let i = 0; i < this.arrayoftasks.length; i++) {
            if(this.arrayoftasks[i].id == id) {
                this.arrayoftasks[i].nometask = task.nometask;
                this.arrayoftasks[i].time = task.time;
            }
        }
    };

    listatabela() {
          let tbody = document.getElementById('tbody');
          tbody.innerText = '';
          for(let i = 0; i < this.arrayoftasks.length;i++) {
              let tr = tbody.insertRow()
              let td_id = tr.insertCell()
              let td_task = tr.insertCell()
              let td_time = tr.insertCell()
              let td_actions = tr.insertCell()

              td_id.innerText = this.arrayoftasks[i].id;
              td_task.innerText = this.arrayoftasks[i].nometask;
              td_time.innerText = this.arrayoftasks[i].time + `\u{23F0}`;

               let imgedit = document.createElement('img');
               imgedit.src = 'img/edit.png';
               td_actions.appendChild(imgedit)
               imgedit.setAttribute("onclick", "Action.editar("+JSON.stringify(this.arrayoftasks[i])+")")

               let imgdelete = document.createElement('img');
               imgdelete.src = 'img/bin.png';
               td_actions.appendChild(imgdelete)
               imgdelete.setAttribute("onclick", "Action.deletar("+this.arrayoftasks[i].id+")")
               
          } 
          
    };
     lerdados() {
         let task = {}
         task.nometask = document.getElementById('Task').value;
         task.time = document.getElementById('time').value;
         task.id = this.id;
         return task;
     };
     validacampo(task) {
         let msg = '';
         if(task.nometask == '') {
             msg+= `- Please type the task! \n`
         }
         if(task.time == '') {
             msg+= `- Please type the time! \n`
         }

         if(msg != '') {
             alert(msg)
             return false
         }
         return true
     };
     editar(dados) {
       this.editid = dados.id;

          document.getElementById('Task').value = dados.nometask;
          document.getElementById('time').value = dados.time;

          document.getElementById('btnedit').innerText = 'Change'
     }
     deletar(id) {
        let tbody = document.getElementById('tbody');
             if(confirm(`Are you sure you want to delete task ${id}?`)) {
                 for(let i = 0; i < this.arrayoftasks.length; i++) {
               if(this.arrayoftasks[i].id == id) {
                
                this.arrayoftasks.splice(i, 1)

                tbody.deleteRow(i)
               }
           }
             }
           
     };
    cancel() {
      document.getElementById('Task').value = '';
      document.getElementById('time').value = '';
      document.getElementById('btnedit').innerText = 'save'
      this.editid = null;
      
    };
};
var Action = new action;