(function () {
    clear()

    const mainTable = document.querySelector('#frm2 > div:nth-child(6) > table')

    if (!mainTable)
        alert(`Abra a pagina da ailos`)

    const rows = Array.from(mainTable.rows)
    const indexSpend = rows.findIndex(row => row.cells[1].innerHTML.includes(`GASTOS DE`) )

    const result = rows.map((row, index) => {
        if (index < indexSpend) return
    
        if (row.cells[3].innerHTML.trim() !== `` && row.cells[0].innerHTML.trim() !== ``) {
            return (row.cells[1].textContent + `;` + row.cells[3].textContent)
        }
        else {
             if (rows[index+1]?.cells[1].innerHTML.includes(`U$`)) {
                return (row.cells[1].textContent + `;` + rows[index+1].cells[3].textContent)
            }
        }
    }).filter(element => {
        return element !== null && element !== undefined;
    });

    prompt(`CTRL + C`, result.join(`\n`))
})();


//javascript:(function(){
//    fetch('https://raw.githubusercontent.com/Caiuriuller/ailos-credit-card-export/main/index.js')
//    .then(res => console.log(res.text().then(e => (eval(e)))))
//    .catch((e) => console.log(e))
//})();





