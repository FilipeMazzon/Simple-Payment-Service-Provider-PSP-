# PSP
Este e um projeto para simular uma forma de pagamento.


## installation guide

tem duas formas de rodar a aplicacao, uma utilizando docker ou utilizando o ts-node.

caso escolha utilizar o docker siga os passos [instalando docker](https://www.digitalocean.com/community/tutorials/como-instalar-e-usar-o-docker-no-ubuntu-18-04-pt)

caso prefira utilizar na sua maquina [instale o node](https://nodejs.org/en/)

## rodando a aplicacao

caso escolha o docker utilize o comando a seguir

```
 sudo docker-compose up --build
```

com isto voce ja podera testar a aplicacao.


caso voce escolher rodar na sua maquina sem o docker

```
    sudo npm instal // ou sudo yarn
    sudo npm start // ou sudo yarn start
```

com isto voce ja consegue rodar a aplicacao.

## endpoints

temos os seguintes endpoints

+ transactions
    +  GET /transactions
    ```
     aqui voce ira poder buscar todas as transacoes, ou utilizar filtros tais como /transaction?value=100
    ```
    + GET /transactions/_id
    ```
        aqui voce busca a transacao pelo _id, 
    ```
    + POST /transactions
    ```
       Aqui voce ira poder criar suas transacoes, utilizando as transactions do mongodb ele ira criar as financials, se algo der errado ocorre o rollback
    formato do payload a ser seguido: 
  {
    	"value": 100.00, // Valor da transação
    	"description": "Bicicleta ZXY Aro 21", // Descrição da transação
    	"type": "debit", // Tipo de transação (`debit`, `credit`, `installment_credit`)
    	"installments": null, // Número de parcelas, caso seja debito, passar `null`
    	"card": {
    		"number": "5200555500001234", // Número do cartão
    		"expiry": "20/21", // Validade do cartão
    		"cvv": "123", // Código de verificação do cartão
    		"holder": "Fulano de tal" // Nome do portador do cartão
    	}
    }
    ```
+ financials
    + GET /financials 
      ```
        aqui voce ira poder buscar todas as financials, ou utilizar filtros tais como /financials?amount=100
      ```  
    + GET /financials/_id
     ```
        mesma coisa do transactions/_id
     ```
    + POST /financials/client
    ```
        aqui necessita passar pelo body da seguinte forma:
        {
            "client": "Fulano de tal"
        }
        //utilizei o post por conta dos espacos em brancos que aconteceria na query tem a parte do urlenconded mas nao fiz no momento.
    ```
