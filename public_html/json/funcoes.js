/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function json() {
    
    json.prototype.ResgatarValores = function ()
    {
      $.getJSON('arquivo.json', function (data)  
      {
        qnt = data.usuarios.length; //tamanho do json
        retorno = '';
        
        for(i=0; i < qnt; i++)
        {
            retorno += document.write("<b>ID: </b>"+data.usuarios[i].id)+"<br />";
            retorno += document.write("<b>nome: </b>"+data.usuarios[i].nome+"<br/>");
            retorno += document.write("<b>email: </b>"+data.usuarios[i].email+"<br/>");
            retorno += document.write("<hr />");
        }
        
        //document.getElementById('dados').innerHTML = retorno;
        $('dados').html(retorno);
    
    });
};

    json.prototype.BuscarValor = function ()
    {
      valor = document.getElementsByName('valor') [0].value;
      retorno = '';
      
      $.getJSON('arquivo.json', function (data){
          retorno += document.write("<b>ID: </b>"+data.usuarios[valor].id+"<br />");
          retorno += document.write("<b>NOME: </b>"+data.usuarios[valor].nome+"<br />");
          retorno += document.write("<b>EMAIL: </b>"+data.usuarios[valor].email+"<br />");
    
      });
    };
}

obj = new json(); //instaciamento de classe json
