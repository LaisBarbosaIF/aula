import './App.css';

export default App;
function App() {
  return (
<div>
<div>

<h2>O que é uma API?</h2>

<p>Os APIs são mecanismos que possibilitam que dois componentes de software se  conversem utilizando um conjunto de definições e protocolos.Sendo como exemplo um sistema de software de algum instituto nacional de meteorologia que contém dados da meteorologia sendo diários. A aplicação para a previsão do tempo em seu telefone “fala” com esse sistema por meio de APIs mostrando atualizações meteorológicas do dia-a-dia no telefone. 
API tem o significado de Application Programming Interface (Interface de Programação de Aplicação). Com a aplicação do contexto de APIs, a palavra Aplicação se refere a quaisquer software com função diversa. A interface pode ser pensada como um contrato de trabalho entre duas das aplicações. Esse contrato determina como essas duas interfaces se comunicam usando solicitações e respostas. A documentação de suas respectivas APIs tem como objetivo conter os conhecimentos sobre como esses desenvolvedores podem estruturar essas solicitações e respostas.A estrutura da API costuma ser definida em termos de cliente e servidor. A aplicação que realiza a solicitação é conhecida como cliente, 
enquanto a aplicação que fornece a resposta é chamada de servidor. Assim, utilizando o exemplo relacionado ao clima, o banco de dados meteorológico do instituto atua como servidor, enquanto o aplicativo móvel representa o cliente. Existem quatro maneiras diferentes pelas quais as APIs podem funcionar, dependendo de quando e por que elas foram criadas.A estrutura da API normalmente é exposta em termos de cliente e servidor. A execução que tem como propósito enviar a solicitação é chamada de cliente e a aplicação que envia a resposta é chamada de servidor. Então, no mesmo exemplo sobre o clima, o banco de dados meteorológico do instituto é o servidor e o aplicativo móvel é o cliente. 
Essas APIs SOAP utilizam o Protocolo de Acesso a Objetos Simples. Onde o Cliente e servidor mandam as mensagens sendo manuseando com XML. Sendo esta uma das API menos adaptáveis que era mais comum no passado.Essas APIs RPC são consideradas como Chamadas de Procedimento Remoto. O usuário encerra um procedimento no servidor e assim o servidor remete a saída de volta para o cliente.A APIs WebSocket é outro desenvolvimento de API da Web moderno que utiliza os objetos JSON para passar dados. 
Uma API WebSocket proporciona sustentação a  comunicação bidirecional entre os aplicativos de cliente e o servidor. O servidor pode mandar as mensagens de retorno de chamada aos clientes conectados, sendo considerado mais eficaz que a API REST.Essas são as APIs REST sendo consideradas uma das mais populares e adaptáveis já encontradas na Web na atualidade. O usuário manda instâncias ao servidor sendo como dados.
 O servidor então utiliza essa entrada do cliente para dar início às funções internas e regressa os dados de  saída ao cliente.  
</p>

</div>

    <div>
      <button>Botão</button>
    </div>
  

  </div>
  );}



