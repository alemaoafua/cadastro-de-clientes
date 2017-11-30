/* 

 */

function Logar()
{
    var login = document.getElementsByName('login')[0].value;
    var senha = document.getElementsByName('senha')[0].value;
    
    if (login === "admin" && senha === "admin")
    {
        window.location.replace("cadastro.html");
    }
    else if (login === "" || senha === "")
    {
        alert("Não deixar os campos em branco");
    }
    else
    {
        alert("Login ou Senha Incorretos");
        LimpaIndex();
    }
}


function Cadastrar()
{
    var nome = document.getElementsByName('nome')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var telefone = document.getElementsByName('telefone')[0].value;
    
    if(nome === "" || email === "" || telefone === "")
    {
        alert("Não deixar os campos em branco");
    }
    else if (!email.match('@'))
    {
        alert("Email invalido");
    }
    else
    {
        alert("NOME: "+nome+"\nEMAIL: "+email+"\nTELEFONE: "+telefone);
        LimpaCadastro();
    }
}

function LimpaIndex()
{
    document.getElementsByName('login')[0].value = "";
    document.getElementsByName('senha')[0].value = "";
}

function LimpaCadastro()
{
    document.getElementsByName('nome')[0].value = "";
    document.getElementsByName('email')[0].value = "";
    document.getElementsByName('telefone')[0].value = "";
}

function Sair()
{
    window.location.replace('index.html');
}

function CarregarDados ()
{
    $.getJSON('json/arquivo.json', function (data)
    {
        qnt = data.usuarios.length;
        retorno = '';
    
        for(i=0; i < qnt; i++)
        {
            retorno += "<tr>";
            retorno += "<td>"+data.usuarios[i].id+"</td>";
            retorno += "<td>"+data.usuarios[i].nome+"</td>";
            retorno += "<td>"+data.usuarios[i].email+"</td>";
            retorno += "<td>"+data.usuarios[i].telefone+"</td>";
            retorno += "</tr>";
        }
        
        document.getElementById('resultado').innerHTML = retorno;
    
    });
}