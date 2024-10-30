let produto = {"Nome": "Borracha" ,"Quantidade": 42, "Preço": 4 ,
    calcularTotal : function() {
        return this.Preço*this.Quantidade;
    }
};

const total = produto.calcularTotal();
console.log(produto);
console.log("Total:", total);